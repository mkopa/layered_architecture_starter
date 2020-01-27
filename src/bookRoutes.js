const router = require('express').Router();
const validateBookMiddleware = require("./validateBookMiddleware");
const bookRepository = require("./bookRepository");
const bookService = require("./bookService");
const {createOrUpdate, getDetails} = require("./bookController")({bookService, bookRepository});

router.post("/book", validateBookMiddleware, createOrUpdate);
router.get("/book/:isbn", getDetails);

module.exports = router;