import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Img,
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
    <Preview>Acesse sua conta iNeed Stores</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>🛒 iNeed Stores</Heading>
        <Text style={heroText}>
          Olá! Clique no botão abaixo para acessar sua conta:
        </Text>
        <Link
          href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
          target="_blank"
          style={button}
        >
          Acessar minha conta
        </Link>
        <Text style={{ ...text, marginTop: '24px', marginBottom: '14px' }}>
          Ou copie e cole este código de acesso temporário:
        </Text>
        <code style={code}>{token}</code>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '24px',
            marginBottom: '16px',
          }}
        >
          Se você não solicitou este acesso, pode ignorar este email com segurança.
        </Text>
        <Text style={footer}>
          <Link
            href="https://ineedstores.com"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            iNeed Stores
          </Link>
          {' '}– As melhores ofertas para você!
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

const main = {
  backgroundColor: '#0a0a0a',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
}

const container = {
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '40px',
  paddingBottom: '40px',
  margin: '0 auto',
  maxWidth: '480px',
}

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 24px 0',
  padding: '0',
  textAlign: 'center' as const,
}

const heroText = {
  color: '#e5e5e5',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center' as const,
  margin: '0 0 24px 0',
}

const button = {
  backgroundColor: '#22c55e',
  borderRadius: '8px',
  color: '#ffffff',
  display: 'block',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  fontWeight: '600',
  textAlign: 'center' as const,
  textDecoration: 'none',
  padding: '14px 24px',
  margin: '0 auto',
  maxWidth: '200px',
}

const link = {
  color: '#22c55e',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
}

const text = {
  color: '#a3a3a3',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textAlign: 'center' as const,
  margin: '16px 0',
}

const footer = {
  color: '#525252',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '32px',
  marginBottom: '24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #262626',
  paddingTop: '24px',
}

const code = {
  display: 'block',
  padding: '16px',
  width: '100%',
  backgroundColor: '#171717',
  borderRadius: '8px',
  border: '1px solid #262626',
  color: '#22c55e',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  letterSpacing: '4px',
  boxSizing: 'border-box' as const,
}
