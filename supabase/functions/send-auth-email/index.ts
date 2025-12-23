import React from 'npm:react@18.3.1'
import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { MagicLinkEmail } from './_templates/magic-link.tsx'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)
const rawHookSecret = (Deno.env.get('SEND_EMAIL_HOOK_SECRET') as string) ?? ''

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function normalizeBase64Secret(input: string): string {
  // Trim and strip surrounding quotes (common copy/paste mistake)
  let s = (input ?? '').trim()
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim()
  }

  // Convert Base64URL -> Base64
  s = s.replace(/-/g, '+').replace(/_/g, '/')

  // Add padding if missing
  const pad = s.length % 4
  if (pad === 2) s += '=='
  else if (pad === 3) s += '='

  return s
}

function isDecodableBase64(input: string): boolean {
  if (!input) return false
  try {
    // Validate charset after normalization
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/
    if (!base64Regex.test(input)) return false
    atob(input)
    return true
  } catch {
    return false
  }
}


Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders })
  }

  // Validate hook secret exists and looks decodable
  if (!rawHookSecret) {
    console.error('SEND_EMAIL_HOOK_SECRET is not configured')
    return new Response(
      JSON.stringify({ error: { message: 'Hook secret not configured' } }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  }

  const hookSecret = normalizeBase64Secret(rawHookSecret)

  // Safe diagnostics (no secret value)
  console.log(
    `Hook secret diagnostics: len=${rawHookSecret.trim().length}, hasDash=${rawHookSecret.includes('-')}, hasUnderscore=${rawHookSecret.includes('_')}, hasWhitespace=${/\s/.test(rawHookSecret)}`
  )

  if (!isDecodableBase64(hookSecret)) {
    console.error(
      'SEND_EMAIL_HOOK_SECRET is not a valid Base64/Base64URL string. Copy the "Hook Secret" from Supabase Dashboard -> Authentication -> Hooks (no quotes/spaces/newlines).'
    )
    return new Response(
      JSON.stringify({
        error: {
          message:
            'Invalid hook secret format. Paste the Base64 "Hook Secret" from Supabase Auth Hooks (no quotes/spaces/newlines).',
        },
      }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  }

  const payload = await req.text()
  const headers = Object.fromEntries(req.headers)
  
  console.log('Received auth email webhook')
  console.log('Webhook headers:', Object.keys(headers).join(', '))

  const wh = new Webhook(hookSecret)
  
  let verifiedPayload: {
    user: { email: string }
    email_data: {
      token: string
      token_hash: string
      redirect_to: string
      email_action_type: string
    }
  }

  try {
    verifiedPayload = wh.verify(payload, headers) as typeof verifiedPayload
    console.log(`Signature verified for: ${verifiedPayload.user.email}`)
  } catch (error) {
    console.error('Webhook verification failed:', error.name, error.message)
    
    if (error.name === 'WebhookVerificationError') {
      console.error('Signature mismatch - verify SEND_EMAIL_HOOK_SECRET matches the Hook Secret in Supabase Auth Hooks')
    }
    
    return new Response(
      JSON.stringify({
        error: {
          http_code: 401,
          message: error.message,
        },
      }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )
  }

  // Send email in background to avoid timeout
  const sendEmailTask = async () => {
    try {
      const { user, email_data: { token, token_hash, redirect_to, email_action_type } } = verifiedPayload

      console.log(`Sending email to: ${user.email}, action: ${email_action_type}`)

      const html = await renderAsync(
        React.createElement(MagicLinkEmail, {
          supabase_url: Deno.env.get('SUPABASE_URL') ?? '',
          token,
          token_hash,
          redirect_to,
          email_action_type,
        })
      )

      const { data, error } = await resend.emails.send({
        from: 'iNeed Recompensas <onboarding@resend.dev>',
        to: [user.email],
        subject: '✦ Seu link de acesso ao iNeed',
        html,
      })

      if (error) {
        console.error('Resend error:', error)
      } else {
        console.log('Email sent successfully:', data)
      }
    } catch (err) {
      console.error('Background email error:', err)
    }
  }

  // Queue background task and return immediately
  EdgeRuntime.waitUntil(sendEmailTask())
  
  console.log('Email queued, returning 200 to Supabase')

  return new Response(JSON.stringify({}), {
    status: 200,
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  })
})
