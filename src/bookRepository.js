const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/booksapi';

let booksPromise = MongoClient.connect(url).then(function (client) {
    return client.db().collection("books");
});

module.exports = {
    async createOrUpdate(book) {
        const books = await booksPromise;
        await books.updateOne(
            {isbn: book.isbn},
            {$set: book},
            {upsert: true}
        );
    } ,
    async findOne(isbn) {
        const books = await booksPromise;
        const book = await books.findOne({isbn}, {projection: {_id: false}});
        return book;
    }
};