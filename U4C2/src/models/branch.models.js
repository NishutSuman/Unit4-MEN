const mongoose= require("mongoose");

const branchSchema= new mongoose.Schema({
    name:{type:'String', required:true},
    address:{type:'String', required:true},
    ifsc:{type:'String', required:true},
    micr:{type:'Number', required:true},
    masterac:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"master"
    }
},{
    versionKey: false,
    timestamps:{createdAt:true, updatedAt:true}
})

const Branch= mongoose.model('branch',branchSchema);

module.exports= Branch;