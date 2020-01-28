const links = {
    resources: {
        BOOK: "/book/:isbn",
        BOOK_COLLECTION: "/book"
    },
    bookLink(isbn) {
        return links.resources.BOOK.replace(":isbn", isbn);
    },
    paginationLink({start}) {
        return links.resources.BOOK_COLLECTION + "?start="+start;
    }
};

module.exports = links;