const express= require("express");
const router= express.Router();

const Student= require("../models/student.models");

// CRUD OP

router.get("", async(req, res)=> {
    try{
        const students= await Student.find().lean().exec();
        return res.status(200).send(students)
    }catch(err){
        return res.status(500).send(err);
    }
})

router.post("", async(req, res)=> {
    try{
        const student= await Student.create(req.body);
        return res.status(200).send(student)
    }catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:sid", async(req, res)=> {
    try{
        const student= await Student.findById(req.params.sid, req.body).lean().exec();
        return res.status(200).send(student)
    }catch(err){
        return res.status(500).send(err);
    }
})
router.patch("/:sid", async(req, res)=> {
    try{
        const student= await Student.findByIdAndUpdate(req.params.sid, req.body, {new:true});
        return res.status(200).send(student)
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports= router;