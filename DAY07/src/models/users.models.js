const mongoose= require("mongoose");

// USER SCHEMA
// 1---> Create a Schema

const userSchema= new mongoose.Schema(
    {
        firstName:{ type: String},
        lastName: {type:String},
        gender:{ type:String},
        dateOfBirth:{type:String},
        userType: { type: String},
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"student"
        }
    },{
        timestamps: {
            createdAt: true, updatedAt: true
        },
        versionKey: false,
    }
)

module.exports= mongoose.model('user', userSchema)