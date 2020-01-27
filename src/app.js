const express = require("express");
const app = express();
const bookRoutes = require("./bookRoutes");
const {notFound, error} = require("./error");

app.use(express.json());
app.use(bookRoutes);

app.use(notFound);
app.use(error);

module.exports = app;