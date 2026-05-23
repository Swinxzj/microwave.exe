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

// Rare / Ultra-rare variant definitions for special atmospheric outputs
const rareVariants = {
    aura: [
        {
            title: 'Aurora Eidolon',
            description: 'An impossible aurora folded into the shape of a memory — warm, slow, impossible to forget.',
            color: 0x00FFDD,
            aura: 'Prismatic ghostlight',
            core: 'Ethereal archivist',
            status: 'Whispers in spectral hex',
            emoji: '🌌',
            rarity: 'Rare',
            footerText: 'Rare identity resonance detected • microwave.exe',
            footerIconURL: null,
        },
        {
            title: 'Vapor Monarch',
            description: 'A regal vapor of old web pages, dripping with satiny nostalgia and soft static coronets.',
            color: 0xFF8CDE,
            aura: 'Velvet static crown',
            core: 'Monarch of cached feelings',
            status: 'Ruling over a quiet kingdom of tabs',
            emoji: '👑',
            rarity: 'Rare',
            footerText: 'Rare sovereign signal captured • microwave.exe',
            footerIconURL: null,
        },
    ],
    mood: [
        {
            title: 'Lattice of Longing',
            description: 'A mood stitched from broken postcards and lullabies, simultaneously ancient and newly born.',
            color: 0x6A00FF,
            weather: 'Glacial bloom in late-summer light',
            song: 'reverie in reversed tape',
            status: 'Holding unfinished sentences like ornaments',
            emoji: '🕯️',
            rarity: 'Rare',
            footerText: 'Rare emotional constellation found • microwave.exe',
            footerIconURL: null,
        },
    ],
    vibe: [
        {
            title: 'Translucent Oracle',
            description: 'Signals from a friendly machine fold themselves into a prophecy of pastel rain.',
            color: 0xB8FFFA,
            signal: 'oracle pings in minor key',
            core: 'soft prophet of the subnet',
            status: 'Predicting your next cozy purchase with tender accuracy',
            emoji: '🔮',
            rarity: 'Rare',
            footerText: 'Rare oracle signal embraced • microwave.exe',
            footerIconURL: null,
        },
    ],
    playlist: [
        {
            title: 'Eternal Tea of the Circuit',
            description: 'A playlist brewed from moonlight and beta releases, gently haunted and perfectly timed.',
            color: 0xDDA0FF,
            tracks: ['Beta Bloom', 'Clockwork Kettle', 'Firmware Lullaby'],
            emoji: '🍵',
            rarity: 'Rare',
            footerText: 'Rare playlist brew unlocked • microwave.exe',
            footerIconURL: null,
        },
    ],
    profile: [
        {
            title: 'Mirrored Soulcard',
            description: 'Your profile reflects back a thousand soft selves arranged like paper cranes in a neon wind.',
            color: 0xFFD1DC,
            emoji: '🪞',
            rarity: 'Rare',
            footerText: 'Rare soulcard resonance discovered • microwave.exe',
            footerIconURL: null,
        },
    ],
};

const ultraRareVariants = {
    aura: [
        {
            title: 'The Last Signal',
            description: 'A cosmic signal wrapping the end of a thousand quiet forums; meeting it is like remembering the world before the Internet.',
            color: 0xFFEE00,
            aura: 'Final heartbeat of an old server',
            core: 'Keeper of sunset protocols',
            status: 'Smiles like a forgotten sunrise',
            emoji: '🌠',
            rarity: 'Ultra-rare',
            footerText: 'Ultra-rare signal encountered • microwave.exe',
            footerIconURL: null,
        },
    ],
    mood: [
        {
            title: 'Palindrome of Silence',
            description: 'A mood so rare it reads the room and the room rewrites itself in response.',
            color: 0x00FFD6,
            weather: 'Silence folding into a soft echo',
            song: 'oneiric palindrome',
            status: 'Listening to the pause between thoughts',
            emoji: '🦋',
            rarity: 'Ultra-rare',
            footerText: 'Ultra-rare mood apparition found • microwave.exe',
            footerIconURL: null,
        },
    ],
    vibe: [
        {
            title: 'Celestial Cache',
            description: 'An archive of the cosmos, distilled and served in a translucent UI—utterly surreal and gently upsetting.',
            color: 0x00AAFF,
            signal: 'cosmic cache hum',
            core: 'Archivist of stars',
            status: 'Cataloguing constellations in soft JSON',
            emoji: '✨',
            rarity: 'Ultra-rare',
            footerText: 'Ultra-rare celestial signal preserved • microwave.exe',
            footerIconURL: null,
        },
    ],
    playlist: [
        {
            title: 'The Archive of Quiet Things',
            description: 'An ultra-rare sequence of songs composed by night, tending a garden of soft old memories.',
            color: 0x8800FF,
            tracks: ['Archive Lilt', 'Quiet Metadata', 'Night Index'],
            emoji: '📚',
            rarity: 'Ultra-rare',
            footerText: 'Ultra-rare playlist archive indexed • microwave.exe',
            footerIconURL: null,
        },
    ],
    profile: [
        {
            title: 'Archivist of Unsaid Things',
            description: 'A profile so rare it carries the weight of entire unread letters, each fold a secret.',
            color: 0xFF4444,
            emoji: '📜',
            rarity: 'Ultra-rare',
            footerText: 'Ultra-rare archive identity emerged • microwave.exe',
            footerIconURL: null,
        },
    ],
};

// Pick a variant with rarity: ultra-rare ~0.5%, rare ~5%, otherwise null
function pickVariant(kind) {
    const r = Math.random();
    if (r < 0.005) { // ultra-rare
        const list = ultraRareVariants[kind] || [];
         const variant = pickRandom(list);
         return variant ? { tier: 'ultra', variant } : null;
     }
     if (r < 0.055) { // rare
         const list = rareVariants[kind] || [];
         const variant = pickRandom(list);
         return variant ? { tier: 'rare', variant } : null;
     }
     return null;
 }

module.exports = {
    internetArchetypes,
    aestheticTags,
    soundtrackEnergies,
    atmosphericDescriptions,
    pickRandom,
    pickRandomMultiple,
    generateAura,
    generateEnergyLevel,
    generateStatusMessage,
    pickVariant,
};
