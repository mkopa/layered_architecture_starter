const router = require('express').Router();
const validateBookMiddleware = require("./validateBookMiddleware");
const bookRepository = require("./bookRepository");
const bookService = require("./bookService");
const {createOrUpdate, getDetails} = require("./bookController")({bookService, bookRepository});
// choose boring technology
// compose, compose, compose
// understand from first principles
// priortize fast feedback

router.post("/book", validateBookMiddleware, createOrUpdate);
router.get("/book/:isbn", getDetails);

module.exports = router;