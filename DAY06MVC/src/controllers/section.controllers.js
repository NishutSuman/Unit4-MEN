const express= require("express");
const app= express();

const Section= require("../models/section.models")


// SECTIONS CRUD
app.get("", async(req,res)=>{
    try{
        const sections= await Section.find().lean().exec();
        return res.status(200).send(sections);
    }catch(err){
        return res.status(500).send(" Error : "+err);
    }
})

app.post("", async(req,res)=>{
    try{
        const section= await Section.create(req.body);
        // console.log("working");
        return res.status(201).send({section: section});
    }catch(err){
        return res.status(500).send(" Error : "+err);
    }
})

app.get("/:uid", async(req,res)=>{
    try{
        const sections= await Section.findById(req.params.uid).populate({
            path: "bookId", 
            select:{"bookName":1,"checkedInTime":1, "checkedOutTime":1},
            populate:{path: "authorId"}, select: {firstName:1}
        }).lean().exec()
        
        for(let i=0; i<sections.bookId.length; i++){
            if ((sections.bookId[i].checkedInTime)!=0 && (sections.bookId[i].checkedOutTime)==0){
                sections.bookId.splice(i,1);
            }else if((sections.bookId[i].checkedInTime)==1 && (sections.bookId[i].checkedOutTime)!=1){
                sections.bookId.splice(i,1);
            }
        }
        // console.log()
        return res.status(201).send(sections)
    }catch(err){
        return res.status(500).send(" Error : "+err)
    }
})

app.patch("/:uid", async(req,res)=>{
    try{
        const section= await Section.findByIdAndUpdate(req.params.uid, req.body, {new:true});
        return res.status(200).send(section);
    }catch(err){
        return res.status(500).send(" Error : "+err)
    }
})

module.exports= app;