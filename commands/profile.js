const { SlashCommandBuilder } = require('discord.js');
const theme = require('../utils/theme');
const profiles = require('../data/profiles');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Generate a stylish user identity profile with atmospheric embed styling'),

    async execute(interaction) {
        const userId = interaction.user.id;
        const identity = profileManager.getOrCreateUser(userId);
        profileManager.recordInteraction(userId, 'profile');
        
        const profileColors = [theme.colors.neon, theme.colors.amber, theme.colors.cyan, theme.colors.velvet, theme.colors.moon];
        const color = profileColors[Math.floor(Math.random() * profileColors.length)];

        const embed = theme.createEmbed({
            title: `${interaction.user.username}'s Identity Profile`,
            description: identity.currentDescription,
            color: color,
            fields: [
                { name: 'Aura Type', value: identity.coreAura, inline: true },
                { name: 'Emotional Weather', value: identity.currentWeather, inline: true },
                { name: 'Internet Archetype', value: identity.coreArchetype, inline: true },
                { name: 'Current Energy Level', value: `${identity.currentEnergy}% resonant and flowing`, inline: false },
                { name: 'Favorite Imaginary Soundtrack', value: identity.coreSoundtrack, inline: false },
                { name: 'Status Message', value: identity.getContextualStatus(), inline: false },
                { name: 'Aesthetic Tags', value: identity.aestheticTags.join(', '), inline: false },
            ],
            footerText: `Profile #${identity.totalInteractions} • microwave.exe`,
        });

        await interaction.reply({ embeds: [embed] });
    },
};
