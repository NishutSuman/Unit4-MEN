const express= require("express");
const router= express.Router();

const Branch= require("../models/branch.models");

router.get("",async(req,res)=>{
    try{
        const branches= await Branch.find().lean().exec();
        return res.status(200).send(branches);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.post("",async(req,res)=>{
    try{
        const branch= await Branch.create(req.body);
        return res.status(200).send(branch);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.patch("/:uid",async(req,res)=>{
    try{
        const branch= await Branch.findByIdAndUpdate(req.params.uid, req.body, {new:true});
        return res.status(200).send(branch);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:uid",async(req,res)=>{
    try{
        const branch= await Branch.findById(req.params.uid).lean().exec();
        return res.status(200).send(branch);
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports= router;