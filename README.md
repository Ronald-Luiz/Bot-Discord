<h1>🤖Bot do Discord</h1>
Este é um bot para o Discord que responde a mensagens em canais específicos e direciona os usuários para canais relacionados com base em palavras-chave encontradas na mensagem.<p>
  
Pré-requisitos
Antes de executar este bot, você precisa ter instalado:

Node.js (versão 12 ou superior)
Um token de bot do Discord. Você pode obter um em https://discord.com/developers/applications.

<h1>Configuração</h1>
Clone este repositório em sua máquina local.

Crie um arquivo chamado .env na raiz do projeto e insira o token do seu bot do Discord na variável TOKEN como no exemplo abaixo:
```
TOKEN=cole-seu-token-aqui
```

Abra um terminal no diretório clonado e execute o seguinte comando para instalar as dependências:

```
npm install
```

<h1>Executando o bot</h1>
1. Para executar o bot, execute o seguinte comando no terminal:

```
node bot.js
```

2. O bot deve agora estar online no Discord. Ele irá verificar todas as mensagens nos canais especificados e responder às mensagens que contêm palavras-chave específicas, direcionando o usuário para um canal relevante.

<h1>Estrutura do projeto</h1>
O projeto é dividido em dois arquivos principais:

index.js: este é o arquivo principal do bot. Ele inicia o servidor Express e o cliente Discord, e contém o código para direcionar os usuários para canais relevantes com base nas palavras-chave encontradas nas mensagens.
.env: este arquivo contém a chave secreta do bot do Discord. Nunca compartilhe este arquivo ou sua chave secreta com ninguém.


<h1>Resumo</h1>

O código é uma aplicação em Node.js usando a biblioteca Discord.js e o framework Express para criar um bot do Discord com uma funcionalidade específica. O objetivo do bot é ouvir mensagens enviadas em um canal do Discord específico e identificar se elas contêm algumas palavras-chave (javascript, html e css). Se alguma dessas palavras-chave for encontrada, o bot responde com uma mensagem que sugere um canal relacionado onde os usuários podem encontrar mais informações sobre esse tópico.

Vamos analisar o código por partes:



<h1>Express</h1>

```
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido as ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
```

A primeira parte do código importa a biblioteca express e cria uma instância do servidor app. Depois, o servidor é configurado para receber requisições GET na rota /, que retorna um status HTTP 200 e registra a hora em que a requisição foi recebida no console. Por fim, o servidor é iniciado na porta definida na variável de ambiente process.env.PORT.

<h1>Discord.js</h1>

```
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
```
Essa parte do código importa a biblioteca discord.js e cria uma instância do cliente do Discord client. O cliente é configurado com as intenções de gateway necessárias para ouvir eventos relacionados a mensagens em servidores e canais do Discord.

O método client.once() registra um evento que é disparado uma vez quando o bot se conecta com sucesso ao Discord. A mensagem Logged in as <bot_tag>! é exibida no console quando o bot é iniciado.

<h1>Listening to Messages</h1>

```
const channel = "ID_CHANNEL_DISCORD";

client.on('messageCreate', message => {
    if (channel.includes(message.channel.id) && !message.author.bot) {
    
        const keywords = ['javascript', 'html', 'css'];
        const hasKeyword = keywords.some(keyword => message.content.toLowerCase().includes(keyword));

        if (hasKeyword) {
            const index = keywords.findIndex(keyword => message.content.toLowerCase().includes(keyword));
            const keyword = keywords[index];
            let channelName;

            switch (keyword) {
                case 'javascript':
                    channelName = 'javascript';
                    break;
                case 'html':
                    channelName = 'html';
                    break;
                case 'css':
                    channelName = 'css';
                    break;
            }
            const channel = message.guild.channels.cache.find(channel => channel.name === channelName);
            if (channel) {
                message.reply(`Para encontrar conteúdos relacionados ao ${keyword}, acesse o canal ${channel}`);
            } 

        } else {
            return
        }

    } 
});
```

Essa parte do código registra um ouvinte de eventos que é disparado sempre que uma nova mensagem é enviada no Discord.

<h1>Como manter o bot online 24 horas?</h1>
Para manter o bot online 24 horas é necessário hospedar o código em algum lugar. Uma opção é usar o site:<p> 
http://replit.com/<p> 
  
`OBS: para hospedar o código gratuitamente. É necessário criar uma conta ou fazer login usando uma conta do Google.`
  
Por esse motivo que utilizamos o framework Express, para criar um servidor e expor uma rota que responde com um status 200 OK quando acessada. Isso permite que o site UptimeRobot (https://uptimerobot.com/) possa monitorar o bot e mantê-lo online.<p>
`OBS: É necessário criar uma conta ou fazer login usando uma conta do Google no UptimeRobot.`<p>
  
<h1>Como utilizar o site UptimeRobot?</h1><p>
 
```
Primeiro passo:
```
<p>
  
![image](https://user-images.githubusercontent.com/56053290/229211182-b08d75e5-a5ca-4353-80c1-2306af266ab3.png)<p>
```
Segundo passo:
```
<p>
  
![image](https://user-images.githubusercontent.com/56053290/229211242-3fdcf734-b16e-4cd0-9d01-bd5ed6fb9d32.png)<p>
```
Terceiro passo:
```
<p>
  
`OBS: Aqui, você deve inserir o endereço da rota criada pelo Express.`
![image](https://user-images.githubusercontent.com/56053290/229210614-6423ecca-cfc7-4476-b7ee-4a822eeb51df.png)<p>
```
Ultimo passo:
```
<p>
  
`Se o indicador verde aparecer, isso significa que o UptimeRobot detectou a rota e poderá enviar solicitações para mantê-la ativa.`
![image](https://user-images.githubusercontent.com/56053290/229210679-9c38fcea-d4e8-4061-824d-16768726e2c5.png)



Ao adicionar o link da rota criada no código no UptimeRobot, ele irá enviar requisições periódicas para essa rota. Se o bot estiver funcionando corretamente, ele responderá com o status 200 OK e o UptimeRobot irá considerar o bot online. Caso contrário, o UptimeRobot irá considerar o bot offline e enviará um alerta por e-mail ou mensagem. Dessa forma, é possível garantir que o bot fique online 24 horas por dia.


<h1>Licença</h1>
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
