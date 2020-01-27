const router = require('express').Router();
const {createOrUpdate, getDetails} = require("./bookController");
const validateBookMiddleware = require("./validateBookMiddleware");

router.post("/book", validateBookMiddleware, createOrUpdate);
router.get("/book/:isbn", getDetails);

module.exports = router;