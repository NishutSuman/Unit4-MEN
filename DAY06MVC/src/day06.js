const express= require("express");

const app= express();


app.use(express.json());



// CRUD OPERATION-----------
const sectionControlller= require("./controllers/section.controllers")
const bookControlller= require("./controllers/book.controllers")
const authorControlller= require("./controllers/author.controllers")


// MiddleWare -----> route + Controllers
app.use("/sections", sectionControlller);
app.use("/books",bookControlller);
app.use("/authors",authorControlller);

module.exports= app;