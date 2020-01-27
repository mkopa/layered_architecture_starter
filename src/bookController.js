const bookRepository = require("./bookRepository");

module.exports = {
    async createOrUpdate(req, res, next) {
        try {
            // HTTP
            const {title, authors, isbn, description} = req.body;

            // JS
            const books = await bookRepository.createOrUpdate({title, authors, isbn, description});

            // HTTP
            res.json({title, authors, isbn, description});
        } catch (e) {
            next(e);
        }
    },
    async getDetails(req, res, next) {
        try {
            const isbn = req.params.isbn;

            const book = bookRepository.findOne(isbn);

            res.json(book);
        } catch(e) {
            next(e);
        }
    }
};