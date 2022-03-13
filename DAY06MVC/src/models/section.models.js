const mongoose= require("mongoose");

// SECTION SCHEMA
//1--Creating a Schema
const sectionSchema= new mongoose.Schema({
    secName: { type: String, required:true},
    bookId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"book",
    }]
},{
    versionKey:false
})

// 2--Creating a model
const Section= mongoose.model("section", sectionSchema);

module.exports= Section;