const MongoDB = require('mongodb');
const Db = require('./db');

class MongoClient {
    static connect(uri, opt) {
        return new Promise((resolve, reject) => {
            MongoDB.MongoClient.connect(uri, opt, (err, db) => {
                if(err) {
                    return reject(err);
                }
                let mpDb = new Db();
                resolve(new Db()._db = db);
            });
        });
    }
}

module.exports = MongoClient;