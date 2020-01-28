module.exports = db => {
    const router = require('express').Router();
    const {BOOK, BOOK_COLLECTION} = require("./links").resources;
    const decorateLayout = require("./layoutDecorator");
    const validateBookMiddleware = require("./validateBookMiddleware");
    const bookRepository = require("./bookRepository")(db);
    const bookService = require("./bookService")(bookRepository);
    const {createOrUpdate, getDetails, getList} = require("./bookController")({bookService, bookRepository});

    router.post(BOOK_COLLECTION, validateBookMiddleware, createOrUpdate);
    router.get(BOOK_COLLECTION, decorateLayout, getList);
    router.get(BOOK, decorateLayout, getDetails);

    return router;
};