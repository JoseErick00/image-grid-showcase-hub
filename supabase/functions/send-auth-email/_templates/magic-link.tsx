import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Button,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface MagicLinkEmailProps {
  supabase_url: string
  email_action_type: string
  redirect_to: string
  token_hash: string
  token: string
}

export const MagicLinkEmail = ({
  token,
  supabase_url,
  email_action_type,
  redirect_to,
  token_hash,
}: MagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Seu link de acesso ao iNeed Programa de Recompensas</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Text style={logoText}>✦ iNeed ✦</Text>
          <Text style={tagline}>Programa de Recompensas</Text>
        </Section>
        
        <Heading style={h1}>Olá! 👋</Heading>
        
        <Text style={text}>
          Clique no botão abaixo para acessar sua conta no iNeed Programa de Recompensas:
        </Text>
        
        <Section style={buttonContainer}>
          <Button
            style={button}
            href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
          >
            Acessar Minha Conta
          </Button>
        </Section>
        
        <Text style={text}>
          Ou copie e cole este código temporário:
        </Text>
        
        <Section style={codeContainer}>
          <code style={code}>{token}</code>
        </Section>
        
        <Text style={textMuted}>
          Este link expira em 1 hora. Se você não solicitou este acesso, ignore este email.
        </Text>
        
        <Section style={divider} />
        
        <Text style={footer}>
          © 2024 iNeed Programa de Recompensas
          <br />
          Indique amigos, ganhe moedas, resgate prêmios!
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

const main = {
  backgroundColor: '#0f0a1e',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
}

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '480px',
}

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
}

const logoText = {
  color: '#a855f7',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0',
  letterSpacing: '2px',
}

const tagline = {
  color: '#d4af37',
  fontSize: '12px',
  fontWeight: '600',
  margin: '4px 0 0 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '3px',
}

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 24px 0',
  padding: '0',
  textAlign: 'center' as const,
}

const text = {
  color: '#e2e8f0',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
  textAlign: 'center' as const,
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#a855f7',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
}

const codeContainer = {
  textAlign: 'center' as const,
  margin: '24px 0',
}

const code = {
  display: 'inline-block',
  padding: '16px 24px',
  backgroundColor: '#1e1b4b',
  borderRadius: '8px',
  border: '1px solid #4c1d95',
  color: '#d4af37',
  fontSize: '20px',
  fontWeight: 'bold',
  letterSpacing: '4px',
}

const textMuted = {
  color: '#94a3b8',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '24px 0',
  textAlign: 'center' as const,
}

const divider = {
  borderTop: '1px solid #4c1d95',
  margin: '32px 0',
}

const footer = {
  color: '#64748b',
  fontSize: '12px',
  lineHeight: '20px',
  textAlign: 'center' as const,
  margin: '0',
}
