const express = require("express");
const app = express();

app.use(express.json());

const userControllers = require("./controllers/user.controllers");
const bookControllers = require("./controllers/book.controllers");
const commentControllers = require("./controllers/book.controllers");
const publicationControllers = require("./controllers/book.controllers");

app.use("/users", userControllers);
app.use("/books", bookControllers);
app.use("/comments", commentControllers);
app.use("/publications", publicationControllers);

module.exports = app;
