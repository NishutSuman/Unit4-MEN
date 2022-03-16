const express= require("express");
const router= express.Router();

const Batch= require("../models/batch.models");

// CRUD OP

router.get("", async(req, res)=> {
    try{
        const batches= await Batch.find().lean().exec();
        return res.status(200).send(batches)
    }catch(err){
        return res.status(500).send(err);
    }
})

router.post("", async(req, res)=> {
    try{
        const batch= await Batch.create(req.body);
        return res.status(200).send(batch)
    }catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:sid", async(req, res)=> {
    try{
        const batch= await Batch.findById(req.params.sid, req.body).lean().exec();
        return res.status(200).send(batch)
    }catch(err){
        return res.status(500).send(err);
    }
})
router.patch("/:sid", async(req, res)=> {
    try{
        const batch= await Batch.findByIdAndUpdate(req.params.sid, req.body, {new:true});
        return res.status(200).send(batch)
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports= router;