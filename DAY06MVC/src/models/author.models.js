const mongoose= require("mongoose");

// AUTHOR SCHEMA
//1--Creating a Schema
const authorSchema= new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type:String, required: false},
    bookId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"book",
    }]
    
},{
    versionKey: false
})

// 2--Creating a model
const Author= mongoose.model('author', authorSchema);

module.exports= Author;