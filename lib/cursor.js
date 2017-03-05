class Cursor {
    constructor(internal) {
        this._cursor = internal;
    }

    /**
     * Returns an array of documents
     * @returns {Promise}
     */
    toArray() {
        return new Promise((resolve, reject) => {
            this._cursor.toArray((err, docs) => {
                err ? reject(err) : resolve(docs);
            });
        });
    }

    /**
     * Iterates over all the documents for this cursor
     * @returns {Promise}
     */
    each(fn) {
        return new Promise((resolve, reject) => {
            let loop = () => {
                this._cursor.each((err, doc) => {
                    err ? reject(err) : !doc ? resolve() : fn(doc) && loop();
                });
            };
            setImmediate(loop);
        });
    }

    /**
     * Determines how many result the query for this cursor will return
     * @param {boolean} applySkipLimit
     * @returns {Promise}
     */
    count(applySkipLimit = false) {
        return new Promise((resolve, reject) => {
            this._cursor.count(applySkipLimit, (err, count) => {
                err ? reject(err) : resolve(count);
            });
        });
    }

    /**
     * Sets the sort parameter of this cursor to the given value.
     * @param keyOrList
     * @param direction
     * @returns {Cursor}
     */
    sort(keyOrList, direction) {
        this._cursor.sort(keyOrList, direction);
        return this;
    }

    /**
     * Sets the limit parameter of this cursor to the given value.
     * @param limit
     * @returns {Cursor}
     */
    limit(limit) {
        this._cursor.limit(limit);
        return this;
    }

    /**
     * Specifies a time limit for a query operation
     * @param maxTimeMS
     * @returns {Cursor}
     */
    maxTimeMS(maxTimeMS) {
        this._cursor.maxTimeMS(maxTimeMS);
        return this;
    }

    /**
     * Sets the read preference for the cursor
     * @param {string} pref
     * @returns {Cursor}
     */
    setReadPreference(pref) {
        this._cursor.setReadPreference(pref);
        return this;
    }
    
    /**
     * Sets the skip parameter of this cursor to the given value.
     * @param {number} skipped Amount of documents skipped
     * @returns {Cursor}
     */
    skip(skipped) {
        this._cursor.skip(skipped);
        return this;
    }

    /**
     * Gets the next document from the cursor.
     * @returns {Promise}
     */
    nextObject() {
        return new Promise((resolve, reject) => {
            this._cursor.nextObject((err, doc) => {
                err ? reject(err) : resolve(doc);
            });
        });
    }

    /**
     * Gets a detailed information about how the query is performed on this cursor and how long it took the database to process it.
     * @returns {Promise}
     */
    explain() {
        return new Promise((resolve, reject) => {
            this._cursor.explain((err, explaination) => {
                err ? reject(err) : resolve(explaination);
            });
        });
    }

    /**
      * Close the cursor
      * @returns {Promise}
      */
    close() {
        return new Promise((resolve, reject) => {
            this._cursor.close((err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }

    /**
     * Check if the cursor is closed or open.
     * @param pref
     * @returns {Cursor}
     */
    isClosed(pref) {
        return this._cursor.isClosed(pref);
    }
}

module.exports = Cursor;
