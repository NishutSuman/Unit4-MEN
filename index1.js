const express= require("express");
const app= express();

app.use(singleBook);

app.get("/books",(req,res)=>{
    console.log("app.get working")
    return res.send({book:'req.name'});
})

function singleBook(req,res,next){
    req.name = req.params.name;
    console.log(req.name)
    console.log("handler running")
    next()
}

app.listen("6000",()=>{
    console.log("Listening at 6000...")
})