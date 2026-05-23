const { SlashCommandBuilder } = require('discord.js');
const theme = require('../utils/theme');
const profiles = require('../data/profiles');

const vibes = [
    {
        title: 'Vibecheck: Neon Nocturne',
        description: 'Your core signal is a midnight scroll of electric whispers and velvet noise, calibrated for haunted chatrooms and glitchy dreams.',
        color: 0x7B61FF,
        signal: 'Soft neon pulse tangled in browser tabs',
        atmosphere: 'Flickering streetlamp against a rain-soaked viewport',
        core: 'Cybernetic poet with a haunted hyperlink heart',
        battery: '42% energy; recharging on pixelated clouds',
        status: 'Quietly hums at algorithmic poetry while watching the tide of notifications',
    },
    {
        title: 'Vibecheck: Clouded Cache',
        description: 'Your personality reads like cached memories from an old social feed, warm and weirdly familiar in a vaporwave haze.',
        color: 0xF47D9E,
        signal: 'Warm static overlay with pastel interface echoes',
        atmosphere: 'Misty sunrise through cracked screens',
        core: 'A gentle anomaly with analog soul in a digital shell',
        battery: '69% energy; mood set to subtle glow',
        status: 'Waves at strangers with soft emojis and mysterious half-smiles',
    },
    {
        title: 'Vibecheck: Glitch Garden',
        description: 'Your reading blooms with glitch petals and neon code, a strange garden where avatar sprites drift on moonlit streams.',
        color: 0x44D7B6,
        signal: 'Dancing pixels pinned to a quiet heartbeat',
        atmosphere: 'Electric mist over an endless night forum',
        core: 'A whimsical server sprite who writes feelings in CSS',
        battery: '56% energy; oscillating between hype and hush',
        status: 'Softly debugging your own sense of style while humming synthwave',
    },
    {
        title: 'Vibecheck: Static Serenity',
        description: 'Your aura feels like a calm screen saver after midnight, cool and surreal with a pulse of atmospheric internet-core clarity.',
        color: 0x5F8FA7,
        signal: 'Quiet whir of an old modem transformed into ambient hum',
        atmosphere: 'Still twilight in a neon forest of feeds',
        core: 'A serene netizen who lives in encrypted reveries',
        battery: '81% energy; radiating mellow wavelength',
        status: 'Contemplating the meaning of unread messages with stylish detachment',
    },
    {
        title: 'Vibecheck: Lunar Ping',
        description: 'Your personality sends pulses like moonbeams through fiber optics: poetic, otherworldly, and a little mischievous.',
        color: 0xA084FF,
        signal: 'Moonlit packet drift across a distant server sea',
        atmosphere: 'Hushed cosmic rain on a glowing desktop',
        core: 'A nocturnal navigator of dreams and data streams',
        battery: '93% energy; ready to vibe in quiet cosmic mode',
        status: 'Smiling at midnight memes while plotting your next ethereal post',
    },
    {
        title: 'Vibecheck: Chromatic Drift',
        description: 'Your essence is an iridescent drift through alternate reality feeds, weird and wonderful with a vaporous glow.',
        color: 0xFF7BC0,
        signal: 'Shifting rainbow noise and soft browser ghosts',
        atmosphere: 'A pastel dawn in the heart of a digital dream',
        core: 'An eclectic architect of mood and color',
        battery: '77% energy; vividly balanced between chaos and calm',
        status: 'Turning everyday moments into artful, atmospheric sensations',
    },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vibecheck')
        .setDescription('Analyze a user with weird atmospheric internet-core personality readings using a stylish embed')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The user to vibecheck (defaults to you)')
                .setRequired(false)
        ),

    async execute(interaction) {
        const target = interaction.options.getUser('target') || interaction.user;
        const vibe = vibes[Math.floor(Math.random() * vibes.length)];
        const embed = theme.createEmbed({
            title: vibe.title,
            description: vibe.description,
            color: vibe.color,
            author: { name: `Vibecheck for ${target.username}`, iconURL: target.displayAvatarURL() },
            fields: [
                { name: 'Signal Reading', value: vibe.signal, inline: true },
                { name: 'Atmospheric Mood', value: vibe.atmosphere, inline: true },
                { name: 'Core Identity', value: vibe.core, inline: true },
                { name: 'Energy Level', value: vibe.battery, inline: true },
                { name: 'Status Update', value: vibe.status, inline: false },
            ],
            footerText: 'Atmospheric internet-core vibes detected ✨',
        });

        await interaction.reply({ embeds: [embed] });
    },
};
