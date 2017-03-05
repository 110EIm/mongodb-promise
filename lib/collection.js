const Cursor = require('./cursor');

class Collection {

    /**
     * Create a new Collection instance (INTERNAL TYPE, do not instantiate directly)
     * @param db
     * @param collectionName
     * @constructor
     */
    constructor(internal) {
        this._col = internal;
    }

    /**
     * Get all the collection statistics
     * @param {Object} [options]
     * @returns {Promise}
     */
    stats(options = {}) {
        return new Promise((resolve, reject) => {
            this._col.stats(options, (err, stats) => {
                err ? reject(err) : resolve(stats);
            });
        });
    }

    /**
     * Inserts a single document or a an array of documents into MongoDB
     * @param {(Object|Object[])} docs
     * @param {Object} [options]
     * @returns {Promise}
     */
    insert(docs, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.insert(docs, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Removes documents specified by selector
     * @param {Object} [selector]
     * @param {Object} [options]
     * @returns {Promise}
     */
    remove(selector, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.remove(selector, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    delete(...params) {
        this.remove(...params);
    }

    /**
     * Renames the collection
     * @param {string} newName
     * @param {Object} [options]
     * @returns {Promise}
     */
    rename(newName, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.rename(newName, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Save a document
     * @param {Object} doc
     * @param {Object} [options]
     * @returns {Promise}
     */
    save(doc, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.save(doc, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Updates documents
     * @param {Object} selector
     * @param {Object} document
     * @param {Object} [options]
     * @returns {Promise}
     */
    update(selector, doc, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.update(selector, doc, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * The distinct command returns returns a list of distinct values for the given key across a collection
     * @param {string} key
     * @param {Object} [query]
     * @param {Object} options
     * @returns {Promise}
     */
    distinct(key, query = {}, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.distinct(key, query, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Count number of matching documents in the db to a query
     * @param query
     * @param options
     * @returns {Promise}
     */
    count(query, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.count(query, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Drop the collection
     * @returns {Promise}
     */
    drop() {
        return new Promise((resolve, reject) => {
            this._col.drop((err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Find and update a document.
     * @param {Object} query
     * @param {Array} sort
     * @param {Object} doc
     * @param {Object} [options]
     * @returns {Promise}
     */
    findAndModify(query, sort, doc, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.findAndModify(query, sort, doc, options, (err, doc) => {
                err ? reject(err) : resolve(doc);
            });
        });
    }

    /**
     * Finds a single document based on the query
     * @param {Object} query
     * @param {Object} [options]
     * @returns {Promise}
     */
    findOne(query, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.findOne(query, options, (err, doc) => {
                err ? reject(err) : resolve(doc);
            });
        });
    }

    /**
     * Find and remove a document
     * @param {Object} query
     * @param {Array} sort
     * @param {Object} [options]
     * @returns {Promise}
     */
    findAndRemove(query, sort, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.findAndModify(query, sort, options, (err, doc) => {
                err ? reject(err) : resolve(doc);
            });
        });
    }

    /**
     * Creates a cursor for a query that can be used to iterate over results from MongoDB
     * @param {Object} query
     * @param {Array} sort
     * @param {Object} [options]
     * @returns {Cursor}
     */
    find(query, sort, options) {
        return new Cursor(new Cursor(this._col.find(query, sort, options)));
    }

    /**
     * Creates an index on the collection.
     * @param {Object} fieldOrSpec
     * @param {Object} [options]
     * @returns {Promise}
     */
    createIndex(fieldOrSpec, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.createIndex(fieldOrSpec, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Ensures that an index exists, if it does not it creates it
     * @param fieldOrSpec
     * @param options
     * @returns {Promise}
     */
    ensureIndex(fieldOrSpec, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.ensureIndex(fieldOrSpec, options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Retrieves this collections index info.
     * @param options
     * @returns {Promise}
     */
    indexInformation(options = {}) {
        return new Promise((resolve, reject) => {
            this._col.indexInformation(options, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Drops an index from this collection
     * @param name
     * @returns {Promise}
     */
    dropIndex(name) {
        return new Promise((resolve, reject) => {
            this._col.dropIndex(name, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Drops all indexes from this collection.
     * @returns {Promise}
     */
    dropAllIndexes(name) {
        return new Promise((resolve, reject) => {
            this._col.dropAllIndexes(name, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Reindex all indexes on the collection
     * @returns {Promise}
     */
    reIndex(name) {
        return new Promise((resolve, reject) => {
            this._col.reIndex(name, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Run Map Reduce across a collection
     * @param map
     * @param reduce
     * @param options
     * @returns {Promise}
     */
    mapReduce(map, reduce, options = {}) {
        return new Promise((resolve, reject) => {
            this._col.mapReduce(map, reduce, options, (err, result) => {
                if(err) {
                    return reject(err);
                }
                if(options && options.out && (options.out.inline === 1)) {
                    resolve(result);
                } else {
                    resolve(new Collection(result));
                }
            });
        });
    }
}

module.exports = Collection;
