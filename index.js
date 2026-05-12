const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits, REST, Routes } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (!token || !clientId) {
    console.error('Missing required environment variables: TOKEN and CLIENT_ID must be set.');
    process.exit(1);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.existsSync(commandsPath)
    ? fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
    : [];

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if (command.data && command.execute) {
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
    } else {
        console.warn(`Command at ${filePath} is missing required "data" or "execute" property.`);
    }
}

client.once('ready', async () => {
    console.log(`Bot is online! Registering ${commands.length} command(s) ${guildId ? `to guild ${guildId}` : 'globally'}.`);

    const rest = new REST({ version: '10' }).setToken(token);
    const route = guildId
        ? Routes.applicationGuildCommands(clientId, guildId)
        : Routes.applicationCommands(clientId);

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(route, { body: commands });
        console.log('Successfully reloaded application (/) commands.');
        if (guildId) {
            console.log('Use commands instantly in the test guild.');
        }
    } catch (error) {
        console.error(error);
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(`Error executing ${interaction.commandName}:`, error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command.', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
        }
    }
});

client.login(token);