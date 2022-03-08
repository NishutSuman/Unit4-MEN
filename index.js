const express= require('express');

const app= express();

app.use(allBooks);


app.get("/books", (req,res)=>{
    return res.send("Fetching All Books");
})

function allBooks(req,res,next){
    console.log('Fetching All Books...');
    next();
}

app.use(singleBook);

app.get("/books/:name",(req,res)=>{
    console.log("app.get working")
    return res.send({book:req.name});
})

function singleBook(req,res,next){
    req.name = req.params.name;
    console.log(req.name)
    console.log("handler running")
    next()
}

app.listen("5000", ()=>{
    console.log('Listening at 5000');
})