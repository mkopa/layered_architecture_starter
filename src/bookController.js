// const bookRepository = require("./bookRepository");
// const bookService = require("./bookService");

module.exports = ({bookService, bookRepository}) => ({
    async createOrUpdate(req, res, next) {
        try {
            // HTTP
            const {title, authors, isbn, description} = req.body;

            // JS
            await bookService.createOrUpdate({title, authors, isbn, description});

            // HTTP
            res.redirect("/book/"+isbn);
        } catch (e) {
            console.log(e);
            next(e);
        }
    },
    async getDetails(req, res, next) {
        try {
            const isbn = req.params.isbn;

            const book = await bookRepository.findOne(isbn);

            res.json(book);
        } catch(e) {
            next(e);
        }
    }
});