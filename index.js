const venom = require('venom-bot');

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
