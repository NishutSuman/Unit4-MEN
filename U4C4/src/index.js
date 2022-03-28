const express = require("express");
const app = express();

app.use(express.json());

const {register, login}= require("./controllers/auth.controllers")
const todoContoller= require("./controllers/todo.controllers")

app.post("/register", register)
app.post("/login", login)
app.use("/todos", todoContoller)

module.exports = app;