const { SlashCommandBuilder } = require('discord.js');
const theme = require('../utils/theme');

const playlists = [
    {
        title: 'Soft Servo Sundown',
        genre: 'Dreamwave Glitch',
        energy: 'Warm, hazily energized with a nostalgic pulse',
        scenario: 'Late-night editing session under flickering LEDs and empty coffee cups',
        tracks: [
            'Pixelated Dusk',
            'Vinyl Static Reverie',
            'Cassette Moonbloom',
        ],
        description: 'This playlist feels like a memory found inside a forgotten browser tab, soft synths and analog dreams wrapped in a cozy glow.',
        color: 0x8262F8,
    },
    {
        title: 'Lanterns in the Data Stream',
        genre: 'Internet-core Ambient',
        energy: 'Quietly shimmering with wistful, weird warmth',
        scenario: 'Wandering through nostalgic feeds at 3 a.m. with a blanket and fuzzy headphones',
        tracks: [
            'Hovering Over Old Posts',
            'Dreamlog Offline',
            'Warm Cache of Memory',
        ],
        description: 'Like whispered late-night DMs from another era, this set is equally emotional and surreal, with a cozy undercurrent that keeps you grounded.',
        color: 0xE48B6C,
    },
    {
        title: 'Nebula Tea Party',
        genre: 'Pastel Vapor Lounge',
        energy: 'Softly buoyant and oddly sentimental',
        scenario: 'Daydreaming in a window seat while the world feels both digital and analog',
        tracks: [
            'Chromatic Steam',
            'Tea-Stained Downloads',
            'Sundown Softwired',
        ],
        description: 'A cozy node of late summer feelings, with warm textures and nostalgic melodies that feel like a diary entry set to sound.',
        color: 0xFFB6C1,
    },
    {
        title: 'Aurora Cache',
        genre: 'Nocturnal City Pop',
        energy: 'Gently floating with a melancholic shine',
        scenario: 'Walking through rainy neon streets, headphones on, thoughts turned to soft revelation',
        tracks: [
            'Rainy Server Lights',
            'Moonlit Algorithm',
            'Skyline Slowdown',
        ],
        description: 'Perfect for those internet-core nights when your feelings feel vivid and your imagination is full of shimmering possibilities.',
        color: 0x73A2B0,
    },
    {
        title: 'Memory Loop Lounge',
        genre: 'Retro Soft Pop',
        energy: 'Warmly reflective and gently energized',
        scenario: 'Curling up with a nostalgic playlist while browsing old photos and fuzzy memories',
        tracks: [
            'Analog Afterglow',
            'Soft Rewind',
            'Quiet Cache Sparrow',
        ],
        description: 'This playlist mixes cozy emotional textures with dreamlike melodies, perfect for drifting through your own inner slideshow.',
        color: 0xC389B2,
    },
    {
        title: 'Glittering Glitch Cottage',
        genre: 'Weirdwave Folk',
        energy: 'Delicate, mysterious, and comforting',
        scenario: 'Sitting in a tiny room filled with fairy lights and old web tabs, letting your mind wander',
        tracks: [
            'Fuzzy Firewall Lullaby',
            'Hologram Hearth',
            'Murmur of the Modem',
        ],
        description: 'A strange, cozy collection of tracks that feel like an emotional patchwork quilt for your softest internet dreams.',
        color: 0x7E8DAA,
    },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Generate an atmospheric fake playlist with dreamy internet-core vibes'),
    async execute(interaction) {
        const playlist = playlists[Math.floor(Math.random() * playlists.length)];
        const embed = theme.createEmbed({
            title: playlist.title,
            description: playlist.description,
            color: playlist.color,
            fields: [
                { name: 'Genre', value: playlist.genre, inline: true },
                { name: 'Emotional Energy', value: playlist.energy, inline: true },
                { name: 'Listening Scenario', value: playlist.scenario, inline: false },
                { name: 'Tracks', value: theme.formatTracks(playlist.tracks), inline: false },
            ],
            footerText: 'Curated for cozy late-night internet-core dreams',
        });

        await interaction.reply({ embeds: [embed] });
    },
};
