class InMemoryDB {
    constructor() {
        this.db = {};
        this.transactionActive = false;
        this.changes = {};
    }

    beginTransaction() {
        if (this.transactionActive) {
            throw new Error("Transaction already in progress");
        }
        this.transactionActive = true;
        this.changes = {};
    }

    put(key, value) {
        if (!this.transactionActive) {
            throw new Error("No transaction in progress. Please start a transaction before making changes.");
        }
        this.changes[key] = value;
    }

    get(key) {
        if (this.transactionActive && key in this.changes) {
            return this.changes[key];
        }
        return this.db[key] || null;
    }

    commit() {
        if (!this.transactionActive) {
            throw new Error("No transaction to commit");
        }
        Object.assign(this.db, this.changes);
        this.transactionActive = false;
        this.changes = {};
    }

    rollback() {
        if (!this.transactionActive) {
            throw new Error("No transaction to rollback");
        }
        this.transactionActive = false;
        this.changes = {};
    }
}

module.exports = InMemoryDB; 
