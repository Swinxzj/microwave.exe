// User identity class — represents a persistent user profile
const profiles = require('./profiles');

class UserIdentity {
    constructor(userId, data = {}) {
        this.userId = userId;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.lastUpdated = data.lastUpdated || new Date().toISOString();
        
        // Core identity (stable, doesn't change often)
        this.coreAura = data.coreAura || profiles.pickRandom(profiles.auraTypes);
        this.coreArchetype = data.coreArchetype || profiles.pickRandom(profiles.internetArchetypes);
        this.coreSoundtrack = data.coreSoundtrack || profiles.pickRandom(profiles.soundtrackEnergies);
        this.aestheticTags = data.aestheticTags || profiles.pickRandomMultiple(profiles.aestheticTags, 4);
        
        // Dynamic identity (changes on each interaction, but influenced by core)
        this.currentWeather = data.currentWeather || profiles.pickRandom(profiles.emotionalWeather);
        this.currentDescription = data.currentDescription || profiles.pickRandom(profiles.atmosphericDescriptions);
        this.recentStatuses = data.recentStatuses || [];
        
        // Energy tracking
        this.baselineEnergy = data.baselineEnergy !== undefined ? data.baselineEnergy : Math.floor(Math.random() * 40) + 40; // 40-80
        this.currentEnergy = data.currentEnergy !== undefined ? data.currentEnergy : this.baselineEnergy;
        
        // Interaction history
        this.commandsUsed = data.commandsUsed || {};
        this.totalInteractions = data.totalInteractions || 0;
        
        // Preferences inferred from usage
        this.favoriteCommands = data.favoriteCommands || [];
        this.moodHistory = data.moodHistory || []; // Tracks which moods were seen
    }

    // Update the current dynamic state based on elapsed time and interaction
    updateDynamic() {
        this.lastUpdated = new Date().toISOString();
        this.currentWeather = profiles.pickRandom(profiles.emotionalWeather);
        this.currentDescription = profiles.pickRandom(profiles.atmosphericDescriptions);
        
        // Fluctuate energy slightly around baseline
        const drift = Math.floor(Math.random() * 30) - 15; // -15 to +15
        this.currentEnergy = Math.max(10, Math.min(100, this.baselineEnergy + drift));
    }

    // Record a command use
    recordCommandUse(commandName) {
        this.totalInteractions++;
        this.commandsUsed[commandName] = (this.commandsUsed[commandName] || 0) + 1;
        
        if (!this.favoriteCommands.includes(commandName)) {
            this.favoriteCommands.push(commandName);
        }
        
        if (this.favoriteCommands.length > 3) {
            // Keep only top 3 most used
            const sorted = Object.entries(this.commandsUsed).sort((a, b) => b[1] - a[1]);
            this.favoriteCommands = sorted.slice(0, 3).map(([cmd]) => cmd);
        }
    }

    // Add a mood to history
    recordMood(moodTitle) {
        if (!this.moodHistory.includes(moodTitle)) {
            this.moodHistory.push(moodTitle);
        }
        if (this.moodHistory.length > 10) {
            this.moodHistory.shift(); // Keep only last 10
        }
    }

    // Get a status message influenced by interaction history
    getContextualStatus() {
        if (this.recentStatuses.length > 0) {
            // Occasionally reference a recent status
            if (Math.random() > 0.6) {
                return this.recentStatuses[Math.floor(Math.random() * this.recentStatuses.length)];
            }
        }
        return profiles.generateStatusMessage();
    }

    // Serialize for JSON storage
    toJSON() {
        return {
            userId: this.userId,
            createdAt: this.createdAt,
            lastUpdated: this.lastUpdated,
            coreAura: this.coreAura,
            coreArchetype: this.coreArchetype,
            coreSoundtrack: this.coreSoundtrack,
            aestheticTags: this.aestheticTags,
            currentWeather: this.currentWeather,
            currentDescription: this.currentDescription,
            recentStatuses: this.recentStatuses,
            baselineEnergy: this.baselineEnergy,
            currentEnergy: this.currentEnergy,
            commandsUsed: this.commandsUsed,
            totalInteractions: this.totalInteractions,
            favoriteCommands: this.favoriteCommands,
            moodHistory: this.moodHistory,
        };
    }

    // Deserialize from JSON
    static fromJSON(data) {
        return new UserIdentity(data.userId, data);
    }
}

module.exports = UserIdentity;
