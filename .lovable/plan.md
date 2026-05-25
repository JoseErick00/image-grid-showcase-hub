# Atualizar email do formulário de contato

## O que fazer

1. Criar/atualizar o secret `CONTACT_EMAIL` no Lovable Cloud com o valor `ineed.erick@gmail.com` (via secure secrets tool — você digita o valor numa janela segura).
2. A edge function `send-contact-email` já lê esse valor de `Deno.env.get("CONTACT_EMAIL")`, então nenhuma mudança de código é necessária.
3. Redeploy da função `send-contact-email` para garantir que ela pegue o novo secret.
4. Teste enviando uma mensagem pelo formulário de contato e confirmar a chegada no inbox de `ineed.erick@gmail.com`.

## Observações

- O `from` continua sendo `onboarding@resend.dev` (sandbox do Resend). Esse domínio só entrega para o email do dono da conta Resend — como você confirmou que `ineed.erick@gmail.com` está cadastrado lá, deve funcionar.
- Se quiser futuramente enviar a partir de um domínio próprio (ex.: `notify@ineedbrasil.com.br`), é um passo separado que envolve verificar o domínio no Resend.
