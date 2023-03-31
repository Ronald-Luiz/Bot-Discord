const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido as ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);


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

const channel = "1089598293136388248";

client.on('messageCreate', message => {
    if (channel.includes(message.channel.id) && !message.author.bot) {
    
        const keywords = ['javascript', 'html', 'css']; // Define uma lista de palavras-chave
        const hasKeyword = keywords.some(keyword => message.content.toLowerCase().includes(keyword)); // Verifica se a mensagem contém alguma das palavras-chave

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

client.login(process.env.TOKEN);

//||