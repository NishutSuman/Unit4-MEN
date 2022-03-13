const mongoose= require("mongoose");

// BOOK SCHEMA
//1--Creating a Schema
const bookSchema= new mongoose.Schema({
    bookName: { type: String, required: true},
    bookBody: { type:String, required: false},
    checkedOutTime: {type: Number, required:true},
    checkedInTime: {type: Number, required:true},
    sectionId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:"section"
    },
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"author"
    }
},{
    versionKey: false
})

// 2--Creating a model
const Book= mongoose.model('book', bookSchema);

module.exports= Book;