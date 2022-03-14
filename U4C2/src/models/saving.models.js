const mongoose= require("mongoose");

const savingSchema= new mongoose.Schema({
    acno:{type:'Number', required:true, unique:true},
    balance:{type:'Number', required:true},
    roi:{type:'Number', required:true},
},{
    versionKey: false,
    timestamps:{createdAt:true, updatedAt:true}
})

const Saving= mongoose.model('saving',savingSchema);

module.exports= Saving;