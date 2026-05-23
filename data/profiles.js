// Centralized profile data system for microwave.exe
// Reusable arrays and generators for all commands

const auraTypes = [
    'Dreamy Neon Fog',
    'Warm analogue glow',
    'Hazy cyan pulse',
    'Soft velvet static',
    'Silvery moon sheen',
    'Radiant pastel bloom',
    'Glowing keyboard blue',
    'Kindling amber',
    'Pixelated mist',
    'Retro-futurist shimmer',
];

const emotionalWeather = [
    'Soft midnight drizzle across sleepy servers',
    'Dusty autumn light in an old chat room',
    'Cloudy pixel twilight with distant synth rain',
    'Warm glowing dusk with gentle interference',
    'Clear night sky over quiet notifications',
    'Light mist with midnight neon',
    'Electrical storm in the heart',
    'Soft glowing dusk',
    'Warm static rain',
    'Cherry blossom breeze',
];

const internetArchetypes = [
    'Sentimental Browser Nomad',
    'Retro Net Poet',
    'Mystic Data Drifter',
    'Aesthetic Signal Shifter',
    'Nocturnal Empath',
    'Glitch Garden Dreamer',
    'Cybernetic Poet',
    'Gentle Anomaly',
    'Whimsical Server Sprite',
    'Serene Netizen',
];

const aestheticTags = [
    'internet-core',
    'cozy',
    'emotionally weird',
    'nostalgic',
    'atmospheric',
    'dreamy',
    'stylish',
    'pastel noir',
    'artful',
    'vivid',
    'clean',
    'weirdly emotional',
];

const soundtrackEnergies = [
    'low-fi moonbeam reverie',
    'cassette daydream lullabies',
    'ambient network whispers',
    'glittering static ballads',
    'ethereal night synths',
    'soft synth dreams',
    'indie acoustic warmth',
    'synthwave pulse',
    'dream pop shimmer',
    'bubblegum electro pop',
];

const atmosphericDescriptions = [
    'A gentle identity snapshot that feels like your personal browser history turned into a poetic moodboard.',
    'An aesthetic profile that mixes old-school comfort with modern surreal feelings.',
    'A profile that feels like a late-night walk through a glowing city made of code.',
    'A polished identity profile with a hushed emotional tone and cinematic atmosphere.',
    'A serene profile built around gentle emotional clarity and dreamy online presence.',
    'A collection of vibes that feels like an emotional patchwork quilt for your softest internet dreams.',
    'Like whispered late-night messages from another era, equally emotional and surreal.',
    'A memory found inside a forgotten browser tab, soft synths and analog dreams wrapped in a cozy glow.',
    'A strange, cozy collection that feels like floating through quiet feeds with a full heart.',
    'A strange garden where avatar sprites drift on moonlit streams.',
];

// Helper to get a random item from an array
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Helper to get multiple unique random items from an array
function pickRandomMultiple(arr, count) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, arr.length));
}

// Generate a random aura reading
function generateAura() {
    return {
        aura: pickRandom(auraTypes),
        weather: pickRandom(emotionalWeather),
        archetype: pickRandom(internetArchetypes),
        tags: pickRandomMultiple(aestheticTags, 3).join(', '),
        soundtrack: pickRandom(soundtrackEnergies),
        description: pickRandom(atmosphericDescriptions),
    };
}

// Generate battery/energy level (0-100)
function generateEnergyLevel() {
    return Math.floor(Math.random() * 100) + 1;
}

// Generate a status message
function generateStatusMessage() {
    const statuses = [
        'Quietly hums at algorithmic poetry while watching the tide of notifications',
        'Waves at strangers with soft emojis and mysterious half-smiles',
        'Softly debugging your own sense of style while humming synthwave',
        'Contemplating the meaning of unread messages with stylish detachment',
        'Smiling at midnight memes while plotting your next ethereal post',
        'Turning everyday moments into artful, atmospheric sensations',
        'Scrolling through old tabs and feeling beautifully nostalgic',
        'Listening to the hum of your own thoughts between notifications',
        'Floating through quiet feeds with a heart full of half-remembered songs',
        'Crafting your next emotional headline with a calm smile',
        'Curating your own calm in the middle of a digital universe',
    ];
    return pickRandom(statuses);
}

module.exports = {
    auraTypes,
    emotionalWeather,
    internetArchetypes,
    aestheticTags,
    soundtrackEnergies,
    atmosphericDescriptions,
    pickRandom,
    pickRandomMultiple,
    generateAura,
    generateEnergyLevel,
    generateStatusMessage,
};
