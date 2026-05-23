const { SlashCommandBuilder } = require('discord.js');
const theme = require('../utils/theme');

const profiles = [
    {
        title: 'Moonlit Cache Profile',
        aura: 'Dreamy Neon Fog',
        weather: 'Soft midnight drizzle across sleepy servers',
        archetype: 'Sentimental Browser Nomad',
        energy: '59% quietly charged with wistful focus',
        soundtrack: 'low-fi moonbeam reverie',
        status: 'Scrolling through old tabs and feeling beautifully nostalgic',
        tags: 'internet-core, cozy, emotionally weird, nostalgic, pastel noir',
        description: 'A gentle identity snapshot that feels like your personal browser history turned into a poetic moodboard.',
        color: theme.colors.neon,
    },
    {
        title: 'Vintage Pixel Persona',
        aura: 'Warm analogue glow',
        weather: 'Dusty autumn light in an old chat room',
        archetype: 'Retro Net Poet',
        energy: '73% soft and creatively charged',
        soundtrack: 'cassette daydream lullabies',
        status: 'Listening to the hum of your own thoughts between notifications',
        tags: 'nostalgic, cozy, internet-core, artful, emotional',
        description: 'An aesthetic profile that mixes old-school comfort with modern surreal feelings.',
        color: theme.colors.amber,
    },
    {
        title: 'Soft Server Dreamer',
        aura: 'Hazy cyan pulse',
        weather: 'Cloudy pixel twilight with distant synth rain',
        archetype: 'Mystic Data Drifter',
        energy: '48% pleasantly mellow, floating in soft mood',
        soundtrack: 'ambient network whispers',
        status: 'Floating through quiet feeds with a heart full of half-remembered songs',
        tags: 'atmospheric, cozy, weirdly emotional, dreamy, internet-core',
        description: 'A profile that feels like a late-night walk through a glowing city made of code.',
        color: theme.colors.cyan,
    },
    {
        title: 'Velvet Signal Signature',
        aura: 'Soft velvet static',
        weather: 'Warm glowing dusk with gentle interference',
        archetype: 'Aesthetic Signal Shifter',
        energy: '86% cozy but ready for soulful connection',
        soundtrack: 'glittering static ballads',
        status: 'Crafting your next emotional headline with a calm smile',
        tags: 'cozy, clean, emotionally weird, stylish, internet-core',
        description: 'A polished identity profile with a hushed emotional tone and cinematic atmosphere.',
        color: theme.colors.velvet,
    },
    {
        title: 'Lunar Feed Icon',
        aura: 'Silvery moon sheen',
        weather: 'Clear night sky over quiet notifications',
        archetype: 'Nocturnal Empath',
        energy: '91% luminous and quietly immersive',
        soundtrack: 'ethereal night synths',
        status: 'Curating your own calm in the middle of a digital universe',
        tags: 'nostalgic, cozy, internet-core, atmospheric, vivid',
        description: 'A serene profile built around gentle emotional clarity and dreamy online presence.',
        color: theme.colors.moon,
    },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Generate a stylish user identity profile with atmospheric embed styling'),

    async execute(interaction) {
        const profile = profiles[Math.floor(Math.random() * profiles.length)];
        const embed = theme.createEmbed({
            title: profile.title,
            description: profile.description,
            color: profile.color,
            fields: [
                { name: 'Aura Type', value: profile.aura, inline: true },
                { name: 'Emotional Weather', value: profile.weather, inline: true },
                { name: 'Internet Archetype', value: profile.archetype, inline: true },
                { name: 'Current Energy Level', value: profile.energy, inline: false },
                { name: 'Favorite Imaginary Soundtrack', value: profile.soundtrack, inline: false },
                { name: 'Status Message', value: profile.status, inline: false },
                { name: 'Aesthetic Tags', value: profile.tags, inline: false },
            ],
            footerText: 'Profile curated through microwave.exe vibes',
        });

        await interaction.reply({ embeds: [embed] });
    },
};
