const express= require("express");
const router= express.Router();

const Submission= require("../models/submission.models");

// CRUD 

router.get("", async(req, res)=> {
    try{
        const submissions= await Submission.find().lean().exec();
        return res.status(200).send(submissions)
    }catch(err){
        return res.status(500).send(err);
    }
})

router.post("", async(req, res)=> {
    try{
        const submission= await Submission.create(req.body);
        return res.status(200).send(submission)
    }catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:sid", async(req, res)=> {
    try{
        const submission= await Submission.findById(req.params.sid, req.body).lean().exec();
        return res.status(200).send(submission)
    }catch(err){
        return res.status(500).send(err);
    }
})
router.patch("/:sid", async(req, res)=> {
    try{
        const submission= await Submission.findByIdAndUpdate(req.params.sid, req.body, {new:true});
        return res.status(200).send(submission)
    }catch(err){
        return res.status(500).send(err);
    }
})

router.delete("/:sid", async(req, res)=> {
    try{
        const submission= await Submission.findByIdAndDelete(req.params.sid).lean().exec();
        return res.status(200).send(submission)
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports= router;