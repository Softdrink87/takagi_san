
const {Client, Intents} = require('discord.js');
const { token } = require('./config.json');
const depoly = require('./depoly-commands.js');

const client = new Client({intents : [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]});

client.once('ready', () => {
    console.log('ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const {commandName} = interaction;

    if (commandName === 'hello') 
    {
        await interaction.reply('안녕!'); 
    }
    else if (commandName === 'dice') {
        var dice = Math.floor(Math.random() * (7-1) + 1);
        await interaction.reply(String(dice));
    }

    // 커맨드 추가하기 f
});

client.login(token);

