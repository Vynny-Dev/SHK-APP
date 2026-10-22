# SHEKINAH - Projeto Ao Primeiro Amor 🕊️

Aplicativo cristão completo: Devocional Diário, Quarto Secreto com Áudio Ambiente, Busca Bíblica, Relógio de Jejum, Mural de Clamor e Painel Administrativo.

---

## 🚀 Como subir para o GitHub

1. Abra o terminal nesta pasta (`SHK`).
2. Caso ainda não tenha configurado seu usuário do Git, execute:
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu-email@exemplo.com"
   ```
3. Crie um repositório no [GitHub](https://github.com/new) (por exemplo, com o nome `shekinah-app`).
4. Execute os seguintes comandos para enviar os arquivos:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/shekinah-app.git
   git branch -M main
   git push -u origin main
   ```

---

## 🌐 Como fazer Deploy no Render

O projeto já inclui o arquivo `render.yaml` e um servidor Node.js pronto com zero dependências externas:

### Opção 1: Web Service Manual (Recomendado)
1. Acesse o [Render Dashboard](https://dashboard.render.com/).
2. Clique em **New +** > **Web Service**.
3. Conecte sua conta do GitHub e selecione o repositório que você acabou de criar (`shekinah-app`).
4. Configure os seguintes campos:
   - **Name**: `shekinah-app` (ou o nome de sua preferência)
   - **Environment**: `Node`
   - **Build Command**: Deixe em branco ou coloque `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`
5. Clique em **Create Web Service**. Pronto! Em instantes seu site estará no ar com HTTPS gratuito.

### Opção 2: Static Site no Render (Alternativa)
Se preferir hospedar apenas como site estático no Render:
1. No Render, clique em **New +** > **Static Site**.
2. Conecte o repositório.
3. Configure:
   - **Publish directory**: `public`
4. Clique em **Create Static Site**.

---

## 💻 Como Rodar Localmente

Caso tenha o Node.js instalado na máquina:
```bash
node server.js
```
Abra seu navegador em: `http://localhost:3000`
