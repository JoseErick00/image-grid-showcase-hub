# Trocar RESEND_API_KEY para a conta do ineed.erick

## Passos
1. Atualizar o secret `RESEND_API_KEY` com a nova chave da conta Resend de `ineed.erick@gmail.com` (via janela segura).
2. Redeploy da função `send-contact-email`.
3. Disparar um teste e verificar o inbox.

## Observação
Enquanto o `from` for `onboarding@resend.dev` (sandbox), só entrega pro dono da conta dessa key. Para liberar envio a qualquer destinatário, é necessário verificar um domínio próprio no Resend depois.