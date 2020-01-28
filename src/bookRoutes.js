module.exports = db => {
    const router = require('express').Router();
    const validateBookMiddleware = require("./validateBookMiddleware");
    const bookRepository = require("./bookRepository")(db);
    const bookService = require("./bookService")(bookRepository);
    const {createOrUpdate, getDetails, getList} = require("./bookController")({bookService, bookRepository});

    router.post("/book", validateBookMiddleware, createOrUpdate);
    router.get("/book", getList);
    router.get("/book/:isbn", getDetails);

    return router;
};