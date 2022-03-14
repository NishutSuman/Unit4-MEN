const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:{type:'String', required:true},
    middleName:{type:'String', required:false},
    lastName:{type:'String', required:true},
    age:{type:'Number', required:true},
    email:{type:'String', required:true},
    address:{type:'String', required:true},
    gender:{type:'String', required:false},
    type:{type:'String', required:false},
    masterac:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"master"
    }
},{
    versionKey: false,
    timestamps:{createdAt:true, updatedAt:true}
})

const User= mongoose.model('user',userSchema);

module.exports= User;