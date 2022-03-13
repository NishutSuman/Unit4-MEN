const express= require("express");
const app= express();

const Author= require("../models/author.models")



// AUTHOR OPERATION
app.get("", async(req,res)=>{
    try{
        const authors= await Author.find().lean().exec();
        return res.status(200).send(authors);
    }catch(err){
        return res.status(500).send(" Error : "+err);
    }
})

app.post("", async(req,res)=>{
    try{
        const author= await Author.create(req.body);
        // console.log("working");
        return res.status(201).send({author: author});
    }catch(err){
        return res.status(500).send(" Error : "+err);
    }
})

app.get("/:uid", async(req,res)=>{
    try{
        const authors= await Author.findById(req.params.uid).populate({ path: "bookId", select: ["bookName"] })
        .lean()
        .exec();
        
        // console.log(req.params)
        return res.status(201).send(authors)
    }catch(err){
        return res.status(500).send(" Error : "+err)
    }
})

app.patch("/:uid", async(req,res)=>{
    try{
        const author= await Author.findByIdAndUpdate(req.params.uid, req.body, {new:true});
        return res.status(200).send(author);
    }catch(err){
        return res.status(500).send(" Error : "+err)
    }
})

module.exports= app;