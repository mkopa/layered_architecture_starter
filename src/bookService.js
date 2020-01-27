const makeSlug = require("./makeSlug");
const bookRespository = require("./bookRepository");

const bookService = {
    async createOrUpdate({title, authors, isbn, description}) {
        const slug = makeSlug(title);
        await bookRespository.createOrUpdate({title, slug, authors, isbn, description});
    }
};
module.exports = bookService;