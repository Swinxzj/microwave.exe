const { SlashCommandBuilder } = require('discord.js');
const theme = require('../utils/theme');

const auras = [
    {
        title: 'Neon Whisper',
        description: 'Your digital aura hums like a quiet cyber drift, connected to soft screens and late-night messages.',
        color: 0x8C7AFE,
        aura: 'Glowing keyboard blue',
        weather: 'Electrical storm in the heart',
        battery: '60% social battery, recharging in cozy mode',
        energy: 'Alternate chillwave beats',
        core: 'Mystic tech poet',
        status: 'Happily overthinking with a smile',
    },
    {
        title: 'Warm Ember',
        description: 'Your aura feels like an ember that never quite goes out, warm and quietly magnetic around close friends.',
        color: 0xE48B6C,
        aura: 'Kindling amber',
        weather: 'Soft glowing dusk',
        battery: '75% social battery, good for intimate circles',
        energy: 'Indie acoustic warmth',
        core: 'Comfortable creative soul',
        status: 'Flirting with nostalgia and daydreams',
    },
    {
        title: 'Digital Fog',
        description: 'A pixelated mist wraps around your vibe, making everything feel surreal, stylish, and a little mysterious.',
        color: 0x73A2B0,
        aura: 'Hazy cyan mist',
        weather: 'Light mist with midnight neon',
        battery: '40% social battery, prefers solo reflection',
        energy: 'Synthwave pulse',
        core: 'Aesthetic loner with a soft heart',
        status: 'Avoiding small talk like it’s a challenge',
    },
    {
        title: 'Velvet Static',
        description: 'Your reading radiates velvet static and pastel signals, like an old VHS filter with a modern soul.',
        color: 0xC389B2,
        aura: 'Soft velvet static',
        weather: 'Warm static rain',
        battery: '50% social battery, selectively extroverted',
        energy: 'Dream pop shimmer',
        core: 'Retro-futurist daydreamer',
        status: 'Caught between chill and chaotic cozy',
    },
    {
        title: 'Moonlight Pulse',
        description: 'Your aura is a moonlit pulse, dreamy and reflective, pulling in emotion like soft waves on the shore.',
        color: 0x7289DA,
        aura: 'Silvery moon glow',
        weather: 'Clear night with a velvet breeze',
        battery: '85% social battery, calm and present',
        energy: 'Ambient moonlit piano',
        core: 'Gentle empath with stylish bones',
        status: 'Accidentally poetic and slightly mischievous',
    },
    {
        title: 'Pixel Bloom',
        description: 'Your vibe blooms in bold pixels and pastel confidence, equal parts cute, strange, and unforgettable.',
        color: 0xFFB6C1,
        aura: 'Radiant pastel bloom',
        weather: 'Cherry blossom breeze',
        battery: '95% social battery, ready to vibe',
        energy: 'Bubblegum electro pop',
        core: 'Playful aesthetic architect',
        status: 'Sassily building your own cozy world',
    },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aura')
        .setDescription('Get a stylish personality/aesthetic aura reading in a vivid embed'),
    async execute(interaction) {
        const aura = auras[Math.floor(Math.random() * auras.length)];
        const embed = theme.createEmbed({
            title: aura.title,
            description: aura.description,
            color: aura.color,
            fields: [
                { name: 'Digital Aura', value: aura.aura, inline: true },
                { name: 'Emotional Weather', value: aura.weather, inline: true },
                { name: 'Social Battery', value: aura.battery, inline: true },
                { name: 'Music Energy', value: aura.energy, inline: true },
                { name: 'Aesthetic Core', value: aura.core, inline: true },
                { name: 'Strange Status', value: aura.status, inline: true },
            ],
            footerText: 'Your mystical aura reading has arrived ✨',
        });

        await interaction.reply({ embeds: [embed] });
    },
};
