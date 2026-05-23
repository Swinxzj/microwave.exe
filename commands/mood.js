const { SlashCommandBuilder } = require('discord.js');
const theme = require('../utils/theme');

const moods = [
    {
        title: 'Midnight Velvet',
        description: 'A quiet room lit by amber candles, soft piano on loop, and the smell of cinnamon simmering on the stove.',
        color: 0xC9A3E5,
        weather: 'Gentle drizzle',
        song: 'late-night piano & vinyl hum',
        status: 'Dreamy and wrapped in warmth',
    },
    {
        title: 'Sunrise Hearth',
        description: 'A cozy nook with a wool blanket, warm tea, and golden light filtering through curtains.',
        color: 0xF4C3C2,
        weather: 'Soft morning fog',
        song: 'acoustic sunrise melodies',
        status: 'Hopeful and slow-breathing',
    },
    {
        title: 'Rainy Library',
        description: 'A stack of books, a steaming mug at your side, and the sound of rain on the glass for company.',
        color: 0xA2C7E5,
        weather: 'Comforting rain',
        song: 'mellow lo-fi rain beats',
        status: 'Content in quiet curiosity',
    },
    {
        title: 'Candlelit Comfort',
        description: 'Soft candle glow, knitted socks, and a journal open to a page full of honest thoughts.',
        color: 0xE8D3B8,
        weather: 'Cool autumn breeze',
        song: 'warm acoustic whispers',
        status: 'Grounded and reflective',
    },
    {
        title: 'Fireside Daydream',
        description: 'A gentle fire crackles nearby while you watch amber shadows dance across the wall.',
        color: 0xD49080,
        weather: 'Crisp air with falling leaves',
        song: 'soft folk lullabies',
        status: 'Calm with a hint of nostalgia',
    },
    {
        title: 'Moonlit Cozy',
        description: 'Moonlight spills into the room, making the walls glow while you listen to hushed, melodic notes.',
        color: 0x7E8DAA,
        weather: 'Clear night sky',
        song: 'ethereal ambient chord loops',
        status: 'Peaceful and quietly inspired',
    },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mood')
        .setDescription('Receive a random cozy aesthetic mood in an atmospheric embed'),
    async execute(interaction) {
        const mood = moods[Math.floor(Math.random() * moods.length)];
        const embed = theme.createEmbed({
            title: mood.title,
            description: mood.description,
            color: mood.color,
            fields: [
                { name: 'Weather', value: mood.weather, inline: true },
                { name: 'Song Vibe', value: mood.song, inline: true },
                { name: 'Emotional Status', value: mood.status, inline: true },
            ],
            footerText: 'Cozy mood delivered with gentle atmosphere',
        });

        await interaction.reply({ embeds: [embed] });
    },
};
