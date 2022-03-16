const mongoose= require("mongoose");

// EVALUATION SCHEMA
// 1---> Create a Schema

const evaluationSchema= new mongoose.Schema(
    {
       dateOfEvaluation:{ type: String},
       instructorId: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
       batchId:{type: mongoose.Schema.Types.ObjectId, ref:"evaluation"},
       subId:{ type: mongoose.Schema.Types.ObjectId, ref: "submission"},
    },{
        timestamps:  {
            createdAt: true, updatedAt: true
        },
        versionKey: false
    }
)

module.exports= mongoose.model('evaluation', evaluationSchema)