const express= require("express");
const router= express.Router();

const Saving= require("../models/saving.models");

router.get("",async(req,res)=>{
    try{
        const savings= await Saving.find().lean().exec();
        return res.status(200).send(savings);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.post("",async(req,res)=>{
    try{
        const saving= await Saving.create(req.body);
        return res.status(200).send(saving);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.patch("/:uid",async(req,res)=>{
    try{
        const saving= await Saving.findByIdAndUpdate(req.params.uid, req.body, {new:true});
        return res.status(200).send(saving);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:uid",async(req,res)=>{
    try{
        const saving= await Saving.findById(req.params.uid).lean().exec();
        return res.status(200).send(saving);
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports= router;