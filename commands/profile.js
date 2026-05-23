const { SlashCommandBuilder } = require('discord.js');
const theme = require('../utils/theme');
const profiles = require('../data/profiles');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Generate a stylish user identity profile with atmospheric embed styling'),

    async execute(interaction) {
        const aura = profiles.generateAura();
        const energy = profiles.generateEnergyLevel();
        const status = profiles.generateStatusMessage();
        const profileColors = [theme.colors.neon, theme.colors.amber, theme.colors.cyan, theme.colors.velvet, theme.colors.moon];
        const color = profileColors[Math.floor(Math.random() * profileColors.length)];

        const embed = theme.createEmbed({
            title: 'Identity Profile',
            description: aura.description,
            color: color,
            fields: [
                { name: 'Aura Type', value: aura.aura, inline: true },
                { name: 'Emotional Weather', value: aura.weather, inline: true },
                { name: 'Internet Archetype', value: aura.archetype, inline: true },
                { name: 'Current Energy Level', value: `${energy}% resonant and flowing`, inline: false },
                { name: 'Favorite Imaginary Soundtrack', value: aura.soundtrack, inline: false },
                { name: 'Status Message', value: status, inline: false },
                { name: 'Aesthetic Tags', value: aura.tags, inline: false },
            ],
            footerText: 'Profile curated through microwave.exe vibes',
        });

        await interaction.reply({ embeds: [embed] });
    },
};
