const { EmbedBuilder } = require('discord.js');

const colors = {
    neon: 0x8C7AFE,
    amber: 0xE48B6C,
    cyan: 0x73A2B0,
    velvet: 0xC389B2,
    moon: 0x7289DA,
    pastel: 0xFFB6C1,
    playlistPurple: 0x8262F8,
};

const footer = {
    text: 'curated by microwave.exe • cozy internet-core vibes',
    iconURL: null,
};

function createEmbed({ title, description, color, fields = [], author, footerText, timestamp = true }) {
    const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor(color || colors.pastel)
        .addFields(fields);

    if (author) embed.setAuthor(author);
    embed.setFooter({ text: footerText || footer.text, iconURL: footer.iconURL });
    if (timestamp) embed.setTimestamp(new Date());

    return embed;
}

function formatTracks(tracks) {
    return tracks.map((t, i) => `${i + 1}. ${t}`).join('\n');
}

module.exports = {
    colors,
    footer,
    createEmbed,
    formatTracks,
};
