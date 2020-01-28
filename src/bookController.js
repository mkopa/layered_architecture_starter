const mapValues = require("lodash.mapvalues");
const {bookLink} = require("./links");

function wrapWithTryCatch(fn) {
    return function (req, res, next) {
        return Promise.resolve(fn(req, res, next)).catch(next);
    }
}

function withErrorHandling(api) {
    return mapValues(api, wrapWithTryCatch);
}

module.exports = ({bookService, bookRepository}) =>
    withErrorHandling({
        async createOrUpdate(req, res, next) {
            // HTTP
            const {title, authors, isbn, description} = req.body;

            // JS
            await bookService.createOrUpdate({title, authors, isbn, description});

            // HTTP
            res.redirect(bookLink(isbn));
        },
        async getDetails(req, res, next) {
            const isbn = req.params.isbn;

            const book = await bookRepository.findOne(isbn);

            res.format({
                "text/html"() {
                    res.render("book", {book});
                },
                "application/json"() {
                    res.json(book);
                },
                "default"() {
                    res.json(book);
                }
            });
        },
        async getList(req, res) {
            const books = await bookRepository.findAll();

            res.format({
                'text/html'() {
                    res.render("books", {books: books.map(book => ({...book, url: bookLink(book.isbn)}))});
                },
                'application/json'() {
                    res.json(books);
                },
                'default'() {
                    res.json(books);
                }
            });
        }
    });