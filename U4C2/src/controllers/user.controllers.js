const express= require("express");
const router= express.Router();

const User= require("../models/user.models");

router.get("",async(req,res)=>{
    try{
        const users= await User.find().lean().exec();
        return res.status(200).send(users);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.post("",async(req,res)=>{
    try{
        const user= await User.create(req.body);
        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.patch("/:uid",async(req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.uid, req.body, {new:true});
        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:uid",async(req,res)=>{
    try{
        const user= await User.findById(req.params.uid).lean().exec();
        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports= router;