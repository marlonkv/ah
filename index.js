const venom = require('venom-bot');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

  venom
  .create({
    session: 'meu-bot', // Nome da sessão
    headless: true, // Impede a abertura do navegador
    useChrome: false // Usa Chromium embutido
  })
  .then((client) => start(client))
  .catch((erro) => console.log(erro));

function start(client) {
  client.onMessage(async (message) => {
    if (message.body.toLowerCase() === 'oi') {
      await client.sendText(message.from, 'Olá! Como posso ajudar?');
    }
  });
}


app.get('/', (req, res) => {
  res.send('Venom-Bot está rodando!');
});

app.get('/send/:number/:message', async (req, res) => {
  const { number, message } = req.params;
  try {
    await client.sendText(`${number}@c.us`, message);
    res.send('Mensagem enviada!');
  } catch (error) {
    res.status(500).send('Erro ao enviar mensagem!');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


