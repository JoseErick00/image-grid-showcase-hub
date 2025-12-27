import { Resend } from 'npm:resend@4.0.0'
import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)
const hookSecret = Deno.env.get('SEND_EMAIL_HOOK_SECRET') as string

// Extract the secret part - Supabase format is "v1,whsec_..." but the library expects just "whsec_..."
let secretToUse = hookSecret
if (hookSecret && hookSecret.startsWith('v1,')) {
  secretToUse = hookSecret.split(',')[1]
}

console.log('send-auth-email function started')

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const payload = await req.text()
  const headers = Object.fromEntries(req.headers)
  const wh = new Webhook(secretToUse)
  
  try {
    const {
      user,
      email_data: { token, token_hash, redirect_to, email_action_type },
    } = wh.verify(payload, headers) as {
      user: { email: string }
      email_data: {
        token: string
        token_hash: string
        redirect_to: string
        email_action_type: string
      }
    }

    console.log('Sending email to:', user.email, 'type:', email_action_type)

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? 'https://uwzsmfoxjfexodgblzfk.supabase.co'
    // Default redirect to Brazilian domain - the main app domain
    const redirectUrl = redirect_to || 'https://www.ineedbrasil.com.br/premios'
    const verifyLink = `${supabaseUrl}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirectUrl}`

    // Determine subject and button text based on action type
    let subject = 'Acesse sua conta - iNeed Stores'
    let buttonText = 'Acessar minha conta'
    let actionText = 'acessar sua conta'
    
    if (email_action_type === 'signup') {
      subject = 'Confirme seu cadastro - iNeed Stores'
      buttonText = 'Confirmar meu cadastro'
      actionText = 'confirmar seu cadastro'
    } else if (email_action_type === 'recovery') {
      subject = 'Recupere sua senha - iNeed Stores'
      buttonText = 'Recuperar minha senha'
      actionText = 'recuperar sua senha'
    }

    // Use plain HTML instead of React for faster rendering
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 480px; margin: 0 auto; padding: 40px 24px;">
    <h1 style="color: #ffffff; font-size: 28px; font-weight: bold; text-align: center; margin: 0 0 24px 0;">🛒 iNeed Stores</h1>
    <p style="color: #e5e5e5; font-size: 16px; line-height: 24px; text-align: center; margin: 0 0 24px 0;">
      Olá! Clique no botão abaixo para ${actionText}:
    </p>
    <div style="text-align: center; margin: 0 0 24px 0;">
      <a href="${verifyLink}" target="_blank" style="background-color: #22c55e; border-radius: 8px; color: #ffffff; display: inline-block; font-size: 16px; font-weight: 600; text-decoration: none; padding: 14px 24px;">
        ${buttonText}
      </a>
    </div>
    <p style="color: #ababab; font-size: 14px; text-align: center; margin: 24px 0 16px 0;">
      Se você não solicitou este acesso, pode ignorar este email com segurança.
    </p>
    <div style="border-top: 1px solid #262626; margin-top: 32px; padding-top: 24px; text-align: center;">
      <p style="color: #525252; font-size: 12px; margin: 0;">
        <a href="https://www.ineedstores.com" target="_blank" style="color: #898989; text-decoration: underline;">iNeed Stores</a> – As melhores ofertas para você!
      </p>
    </div>
  </div>
</body>
</html>`

    const { error } = await resend.emails.send({
      from: 'iNeed Stores <noreply@ineedstores.com>',
      to: [user.email],
      subject,
      html,
    })
    
    if (error) {
      console.error('Resend error:', JSON.stringify(error))
      throw error
    }
    
    console.log('Email sent successfully')
    
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: { http_code: 500, message: error.message } }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    )
  }

  return new Response(JSON.stringify({}), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
})
