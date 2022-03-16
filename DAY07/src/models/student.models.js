const mongoose= require("mongoose");

// STUDENT SCHEMA
// 1---> Create a Schema

const studentSchema= new mongoose.Schema(
    {
        rollId:{ type: Number},
        currentBatch: {type:String},
        batchId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"batch"
        }
    },{
        timestamps: {
            createdAt: true, updatedAt: true
        },
        versionKey: false 
    }
)

module.exports= mongoose.model('student', studentSchema)