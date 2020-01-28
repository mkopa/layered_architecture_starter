const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/booksapi';

let dbPromise = MongoClient.connect(url).then(function (client) {
    return client.db();
});

module.exports = dbPromise;