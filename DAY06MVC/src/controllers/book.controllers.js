const express= require("express");
const app= express();

const Book= require("../models/book.models")


// BOOKS OPERATION
app.get("", async(req,res)=>{
    try{
        const books= await Book.find().lean().exec();
        return res.status(200).send(books);
    }catch(err){
        return res.status(500).send(" Error : "+err);
    }
})

app.post("", async(req,res)=>{
    try{
        const book= await Book.create(req.body);
        // console.log("working");
        return res.status(201).send({book: book});
    }catch(err){
        return res.status(500).send(" Error : "+err);
    }
})

app.get("/:uid", async(req,res)=>{
    try{
        const books= await Book.findById(req.params.uid).populate({path: "sectionId", select:["secName"]}).lean().exec()
        // console.log(req.params)
        return res.status(201).send(books)
    }catch(err){
        return res.status(500).send(" Error : "+err)
    }
})
app.patch("/:uid", async(req,res)=>{
    try{
        const book= await Book.findByIdAndUpdate(req.params.uid, req.body, {new:true});
        return res.status(200).send(book);
    }catch(err){
        return res.status(500).send(" Error : "+err)
    }
})

module.exports= app;