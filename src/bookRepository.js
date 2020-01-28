module.exports = db => {
    const books = db.collection("books");
    return {
        async createOrUpdate(book) {
            await books.updateOne(
                {isbn: book.isbn},
                {$set: book},
                {upsert: true}
            );
        },
        async findOne(isbn) {
            const book = await books.findOne({isbn}, {projection: {_id: false}});
            return book;
        },
        async findBy({start, limit}) {
            return books
                .find({})
                .skip(start * limit)
                .limit(limit)
                .toArray();
        },
        getCount() {
            return books.countDocuments();
        }
    }
};