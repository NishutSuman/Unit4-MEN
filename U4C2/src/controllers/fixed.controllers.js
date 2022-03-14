const express= require("express");
const router= express.Router();

const Fixed= require("../models/fixed.models");

router.get("",async(req,res)=>{
    try{
        const fixed= await Fixed.find().lean().exec();
        return res.status(200).send(fixed);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.post("",async(req,res)=>{
    try{
        const fixed= await Fixed.create(req.body);
        return res.status(200).send(fixed);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.patch("/:uid",async(req,res)=>{
    try{
        const fixed= await Fixed.findByIdAndUpdate(req.params.uid, req.body, {new:true});
        return res.status(200).send(fixed);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:uid",async(req,res)=>{
    try{
        const fixed= await Fixed.findById(req.params.uid).lean().exec();
        return res.status(200).send(fixed);
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports= router;