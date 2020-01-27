const express = require("express");
const app = express();
const bookRoutes = require("./bookRoutes");

app.use(express.json());
app.use(bookRoutes);

app.use(function notFound(req, res, next) {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use(function error(err, req, res, next) {
    res.status(err.status || 500);
    res.json({message: err.message, error: err.stack});
});

module.exports = app;