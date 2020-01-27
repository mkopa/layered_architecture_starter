const makeSlug = require("./makeSlug");

module.exports = bookRepository => ({
    async createOrUpdate({title, authors, isbn, description}) {
        const slug = makeSlug(title);
        await bookRepository.createOrUpdate({title, slug, authors, isbn, description});
    }
});