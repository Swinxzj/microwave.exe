// Profile manager — handles persistent local storage of user identities
const fs = require('fs');
const path = require('path');
const UserIdentity = require('./userIdentity');

const STORAGE_FILE = path.join(__dirname, 'users.json');

class ProfileManager {
    constructor() {
        this.users = this.loadUsers();
    }

    // Load all users from JSON storage
    loadUsers() {
        try {
            if (fs.existsSync(STORAGE_FILE)) {
                const data = fs.readFileSync(STORAGE_FILE, 'utf8');
                const parsed = JSON.parse(data);
                // Convert raw objects back to UserIdentity instances
                const users = {};
                Object.entries(parsed).forEach(([userId, userData]) => {
                    users[userId] = UserIdentity.fromJSON(userData);
                });
                return users;
            }
        } catch (error) {
            console.warn('Error loading user profiles:', error.message);
        }
        return {};
    }

    // Save all users to JSON storage
    saveUsers() {
        try {
            const data = {};
            Object.entries(this.users).forEach(([userId, identity]) => {
                data[userId] = identity.toJSON();
            });
            fs.writeFileSync(STORAGE_FILE, JSON.stringify(data, null, 2), 'utf8');
        } catch (error) {
            console.error('Error saving user profiles:', error.message);
        }
    }

    // Get or create a user identity
    getOrCreateUser(userId) {
        if (!this.users[userId]) {
            this.users[userId] = new UserIdentity(userId);
            this.saveUsers();
        }
        return this.users[userId];
    }

    // Get an existing user identity (without creating)
    getUser(userId) {
        return this.users[userId] || null;
    }

    // Update a user identity and persist
    updateUser(userId, identity) {
        this.users[userId] = identity;
        this.saveUsers();
    }

    // Record a command interaction
    recordInteraction(userId, commandName) {
        const identity = this.getOrCreateUser(userId);
        identity.recordCommandUse(commandName);
        identity.updateDynamic();
        this.updateUser(userId, identity);
    }

    // Get user count
    getUserCount() {
        return Object.keys(this.users).length;
    }

    // Get summary stats
    getStats() {
        const userIds = Object.keys(this.users);
        const totalInteractions = userIds.reduce((sum, id) => sum + this.users[id].totalInteractions, 0);
        return {
            totalUsers: userIds.length,
            totalInteractions,
            users: userIds,
        };
    }
}

// Create a singleton instance
const manager = new ProfileManager();

module.exports = manager;
