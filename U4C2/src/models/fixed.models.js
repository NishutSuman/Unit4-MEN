const mongoose= require("mongoose");

const fixedSchema= new mongoose.Schema({
    acno:{type:'Number', required:true, unique:true},
    balance:{type:'Number', required:true},
    roi:{type:'Number', required:true},
    startdate:{type:'String', required:true},
    maturitydate:{type:'String', required:true},
},{
    versionKey: false,
    timestamps:{createdAt:true, updatedAt:true}
})

const Saving= mongoose.model('fixed',fixedSchema);

module.exports= Saving;