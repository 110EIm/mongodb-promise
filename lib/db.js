const MongoDB = require('mongodb');


class Db {
    /**
     * Create a new Db instance
     * @param databaseName
     * @param serverConfig
     * @param options
     * @constructor
     */
    constructor(databaseName, serverConfig, options) {
        this.databaseName = databaseName;
        this.serverConfig = serverConfig;
        this.options = options;
    }

    /**
     * Initialize the database connection
     * @returns {Promise}
     */
    open() {
        return new Promise((resolve, reject) => {
            let _db = new MongoDB.Db(this.databaseName, this.serverConfig, this.options);
            _db.open((err, db) => {
                if(err) {
                    return reject(err);
                }
                this._db = db;
                resolve(this);
            });
        });
    }

    /**
     *
     * @param collectionName
     * @param options
     * @returns {Promise}
     */
    collection(collectionName, options = {}) {
        return new Promise((resolve, reject) => {
            this._db.collection(collectionName, options, (err, collection) => {
                err ? reject(err) : resolve(collection);
            });
        });
    }

    /**
     *
     * @param {string} collectionName
     * @param {?Object} options
     * @returns {Promise}
     */
    collectionNames(collectionName, options = {}) {
        return new Promise((resolve, reject) => {
            this._db.collectionNames(collectionName, options, (err, item) => {
                err ? reject(err) : resolve(item);
            });
        });
    }

    /**
     * Close the current db connection
     * @param force
     * @returns {Promise}
     */
    close(force = false) {
        return new Promise((resolve, reject) => {
            this._db.close(force, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Creates a collection on a server
     * @param collectionName
     * @param options
     * @returns {Promise}
     */
    createCollection(collectionName, options = {}) {
        return new Promise((resolve, reject) => {
            this._db.createCollection(collectionName, options, (err, collections) => {
                err ? reject(err) : resolve(collections);
            });
        });
    }

    /**
     * Drop a database
     * @returns {Promise}
     */
    dropDatabase() {
        return new Promise((resolve, reject) => {
            this._db.dropDatabase((err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Get all the db statistics
     * @returns {Promise}
     */
    stats() {
        return new Promise((resolve, reject) => {
            this._db.stats((err, stats) => {
                err ? reject(err) : resolve(stats);
            });
        });
    }

    /**
     * Rename a collection
     * @param {string} fromCollection
     * @param {string} toCollection
     * @param {?Object} options
     * @returns {Promise}
     */
    renameCollection(fromCollection, toCollection, options = {}) {
        return new Promise((resolve, reject) => {
            this._db.renameCollection(fromCollection, toCollection, options, (err, collection) => {
                err ? reject(err) : resolve(collection);
            });
        });
    }

    /**
     * Execute a command hash against MongoDB.
     * @param {Object} selector
     * @param {?Object} options
     * @returns {Promise}
     */
    command(selector, options = {}) {
        return new Promise((resolve, reject) => {
            this._db.command(selector, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Creates an index on the collection
     * @param {string} collectionName
     * @param {Object} fieldOrSpec
     * @param {?Object} options
     * @returns {Promise}
     */
    createIndex(collectionName, fieldOrSpec, options = {}) {
        return new Promise((resolve, reject) => {
            this._db.createIndex(collectionName, fieldOrSpec, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Drop a collection from the database, removing it permanently
     * @param {string} collectionName
     * @returns {Promise}
     */
    dropCollection(collectionName) {
        return new Promise((resolve, reject) => {
            this._db.dropCollection(collectionName, (err, result) => {
                err ? reject(err) : reject(result);
            });
        });
    }

    /**
     * Ensures that an index exists
     * @param {string} collectionName
     * @param {Object} fieldOrSpec
     * @param {?Object} options
     * @returns {Promise}
     */
    ensureIndex(collectionName, fieldOrSpec, options = {}) {
        return new Promise((resolve, reject) => {
            this._db.ensureIndex(collectionName, fieldOrSpec, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }
    /**
     * Retrieves this collections index info
     * @param {string} collectionName
     * @param {?Object} options
     * @returns {Promise}
     */
    indexInformation(collectionName, options = {}) {
        return new Promise((resolve, reject) => {
            this._db.indexInformation(collectionName, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Reindex all indexes on the collection
     * @param collectionName
     * @returns {Promise}
     */
    reIndex(collectionName) {
        return new Promise((resolve, reject) => {
            this._db.reIndex(collectionName, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }
}

module.exports = Db;
