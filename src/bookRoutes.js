const router = require('express').Router();
const {createOrUpdate, getDetails} = require("./bookController");

router.post("/book", createOrUpdate);
router.get("/book/:isbn", getDetails);

module.exports = router;