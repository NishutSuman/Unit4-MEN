const mongoose= require("mongoose");

// SUBMISSION SCHEMA
// 1---> Create a Schema

const submissionSchema= new mongoose.Schema(
    {
        evaluationId:{type: mongoose.Schema.Types.ObjectId, ref:"evaluation"},
        studentId:[{type: mongoose.Schema.Types.ObjectId, ref:"user"}],
        marks:{ type: Number},

    },{
        timestamps:  {
            createdAt: true, updatedAt: true
        },
        versionKey:false
    }
)

module.exports= mongoose.model('submission', submissionSchema)