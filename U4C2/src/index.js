const express= require("express");
const app= express();
const mongoose= require("mongoose");
app.use(express.json());

// CONTROLLERS
const userController= require("./controllers/user.controllers");
const branchController= require("./controllers/branch.controllers");
const savingController= require("./controllers/saving.controller");
const fixedController= require("./controllers/fixed.controllers");
const masterController= require("./controllers/master.controllers");

//MIDDLEWARES
app.use("/users", userController);
app.use("/branches", branchController);
app.use("/savings", savingController);
app.use("/fixed", fixedController);
app.use("/masters", masterController);

module.exports= app;