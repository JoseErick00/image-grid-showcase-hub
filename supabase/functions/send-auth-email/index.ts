import React from 'npm:react@18.3.1'
import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { MagicLinkEmail } from './_templates/magic-link.tsx'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)
const hookSecret = Deno.env.get('SEND_EMAIL_HOOK_SECRET') as string

console.log('send-auth-email function started')
console.log('RESEND_API_KEY exists:', !!Deno.env.get('RESEND_API_KEY'))
console.log('SEND_EMAIL_HOOK_SECRET exists:', !!Deno.env.get('SEND_EMAIL_HOOK_SECRET'))

Deno.serve(async (req) => {
  console.log('Received request:', req.method)
  
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method)
    return new Response('Method not allowed', { status: 405 })
  }

  const payload = await req.text()
  console.log('Payload received, length:', payload.length)
  
  const headers = Object.fromEntries(req.headers)
  const wh = new Webhook(hookSecret)
  
  try {
    console.log('Verifying webhook signature...')
    const {
      user,
      email_data: { token, token_hash, redirect_to, email_action_type },
    } = wh.verify(payload, headers) as {
      user: {
        email: string
      }
      email_data: {
        token: string
        token_hash: string
        redirect_to: string
        email_action_type: string
        site_url: string
        token_new: string
        token_hash_new: string
      }
    }

    console.log('Webhook verified successfully')
    console.log('User email:', user.email)
    console.log('Email action type:', email_action_type)
    console.log('Redirect to:', redirect_to)

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? 'https://uwzsmfoxjfexodgblzfk.supabase.co'
    
    console.log('Rendering email template...')
    const html = await renderAsync(
      React.createElement(MagicLinkEmail, {
        supabase_url: supabaseUrl,
        token,
        token_hash,
        redirect_to,
        email_action_type,
      })
    )
    console.log('Email template rendered successfully')

    // Determine subject based on action type
    let subject = 'Acesse sua conta iNeed Stores'
    if (email_action_type === 'signup') {
      subject = 'Confirme seu cadastro - iNeed Stores'
    } else if (email_action_type === 'recovery') {
      subject = 'Recupere sua senha - iNeed Stores'
    } else if (email_action_type === 'magiclink') {
      subject = 'Link de acesso - iNeed Stores'
    }

    console.log('Sending email via Resend...')
    console.log('Subject:', subject)
    
    const { data, error } = await resend.emails.send({
      from: 'iNeed Stores <noreply@ineedstores.com>',
      to: [user.email],
      subject,
      html,
    })
    
    if (error) {
      console.error('Resend error:', JSON.stringify(error))
      throw error
    }
    
    console.log('Email sent successfully:', JSON.stringify(data))
    
  } catch (error) {
    console.error('Error in send-auth-email function:', error)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    
    return new Response(
      JSON.stringify({
        error: {
          http_code: error.code || 500,
          message: error.message,
        },
      }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  const responseHeaders = new Headers()
  responseHeaders.set('Content-Type', 'application/json')
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: responseHeaders,
  })
})
