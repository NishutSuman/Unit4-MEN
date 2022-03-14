const mongoose= require("mongoose");

const masterSchema= new mongoose.Schema({
    totalbalance:{type:'Number', required:true},
    cxId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    emId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    savingac:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"saving"
    },
    fixedac:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"fixed"
    },
},{
    versionKey: false,
    timestamps:{createdAt:true, updatedAt:true}
})

const Master= mongoose.model('master',masterSchema);

module.exports= Master;