const express = require("express");
const app = express();

app.use(express.json());

const userController = require("./controllers/user.controllers");
const userGalleryController = require("./controllers/gallery.controllers");

app.use("/users", userController);
app.use("/gallery", userGalleryController);

module.exports = app;
