const express= require("express");
const router= express.Router();

const Master= require("../models/master.models");

router.get("",async(req,res)=>{
    try{
        const masters= await Master.find().populate({path:'user',}).lean().exec();
        return res.status(200).send(masters);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.post("",async(req,res)=>{
    try{
        const master= await Master.create(req.body);
        return res.status(200).send(master);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.patch("/:uid",async(req,res)=>{
    try{
        const master= await Master.findByIdAndUpdate(req.params.uid, req.body, {new:true});
        return res.status(200).send(master);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:uid",async(req,res)=>{
    try{
        const master= await Master.findById(req.params.uid).lean().exec();
        return res.status(200).send(master);
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports= router;