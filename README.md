<h1>Bot do Discord para direcionar usuários para canais específicos</h1>
Este é um bot para o Discord que responde a mensagens em canais específicos e direciona os usuários para canais relacionados com base em palavras-chave encontradas na mensagem.

Pré-requisitos
Antes de executar este bot, você precisa ter instalado:

Node.js (versão 12 ou superior)
Um token de bot do Discord. Você pode obter um em https://discord.com/developers/applications.

<h1>Configuração</h1>
Clone este repositório em sua máquina local.

Abra o arquivo .env e insira o token do seu bot do Discord na variável TOKEN.

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

<h1>Licença</h1>
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
