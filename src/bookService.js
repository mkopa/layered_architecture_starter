const makeSlug = require("./makeSlug");
const generatePages = require("./generatePages");

module.exports = bookRepository => ({
    async createOrUpdate({title, authors, isbn, description}) {
        const slug = makeSlug(title);
        await bookRepository.createOrUpdate({title, slug, authors, isbn, description});
    },
    async getList({start, limit}) {
        const books = await bookRepository.findBy({start, limit});
        const totalCount = await bookRepository.getCount();
        const pages = generatePages({current: start, maxPages: Math.ceil(totalCount/limit)});

        return {books, pages};
    }
});