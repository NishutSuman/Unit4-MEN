const express = require("express");
const app = express();

app.use(express.json());

const userControllers = require("./controllers/user.controllers");
const {register,login}= require("./controllers/auth.controllers")

app.use("/users", userControllers);
app.post("/register",register)
app.post("/login",login)

module.exports = app;
