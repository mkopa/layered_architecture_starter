module.exports = () => {
    const books = {};
    const api = {
        async createOrUpdate(book) {
            books[book.isbn] = book;
        },
        async findOne(isbn) {
            return books[isbn];
        }
    }
    return api;
};