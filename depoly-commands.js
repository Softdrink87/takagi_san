const {SlashCommandBuilder} = require('@discordjs/builders');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const {token, clientId, guildId} = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('hello').setDescription('타카기양과 인사를 나누세요.'),
    new SlashCommandBuilder().setName('weather').setDescription('타카기양에게 오늘 날씨를 물어보세요.'),
    new SlashCommandBuilder().setName('dice').setDescription('주사위를 굴려보세요.'),
]
.map(command => command.toJSON()); // 1

const rest = new REST({version : '9'}).setToken(token);
rest.put(Routes.applicationGuildCommands(clientId, guildId),
 { body : commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);