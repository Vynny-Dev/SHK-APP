# SHEKINAH - Projeto Ao Primeiro Amor 🕊️

Aplicativo cristão completo: Devocional Diário, Quarto Secreto com Áudio Ambiente, Busca Bíblica, Relógio de Jejum, Mural de Clamor e Painel Administrativo.

---

## 🚀 Como subir para o GitHub

1. No terminal da pasta `SHK`:
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

## 🌐 Deploy Estático no Render (Static Site - Recomendado)

1. Acesse o [Dashboard do Render](https://dashboard.render.com/).
2. Clique no botão azul **New +** no canto superior direito e selecione **Static Site**.
3. Conecte sua conta do GitHub e selecione o repositório do projeto.
4. Preencha apenas os campos abaixo:
   - **Name**: `shekinah-app` (ou o nome que preferir)
   - **Branch**: `main`
   - **Build Command**: Deixe **vazio** (apague o que estiver escrito)
   - **Publish directory**: Digite exatamente: `public`
5. *(Importante para SPA)* Em **Redirects / Rewrites**:
   - Vá em **Settings** > seção **Redirects/Rewrites**
   - Clique em **Add Rule**:
     - **Source**: `/*`
     - **Destination**: `/index.html`
     - **Action**: `Rewrite`
6. Clique em **Create Static Site**.

Pronto! Seu site estará publicado em segundos com HTTPS grátis e nunca entrará em modo de espera.
