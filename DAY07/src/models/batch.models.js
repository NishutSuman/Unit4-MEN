const mongoose= require("mongoose");

// BATCH SCHEMA
// 1---> Create a Schema

const batchSchema= new mongoose.Schema(
    {
        batchName:{ type: String},
        userId:{type: mongoose.Schema.Types.ObjectId, ref:"user"}
    },{
        timestamps: {
            createdAt: true, updatedAt: true
        },
        versionKey: false
    }
)

module.exports= mongoose.model('batch', batchSchema)