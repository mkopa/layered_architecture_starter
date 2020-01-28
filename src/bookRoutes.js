module.exports = db => {
    const router = require('express').Router();
    const decorateLayout = require("./layoutDecorator");
    const validateBookMiddleware = require("./validateBookMiddleware");
    const bookRepository = require("./bookRepository")(db);
    const bookService = require("./bookService")(bookRepository);
    const {createOrUpdate, getDetails, getList} = require("./bookController")({bookService, bookRepository});

    router.post("/book", validateBookMiddleware, createOrUpdate);
    router.get("/book", decorateLayout, getList);
    router.get("/book/:isbn", decorateLayout, getDetails);

    return router;
};