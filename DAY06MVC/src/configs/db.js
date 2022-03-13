const mongoose= require("mongoose");   //Doesnot belong to here

//Doesnot belong to here
const connectDB= ()=>{
    mongoose.connect(
        "mongodb+srv://NishutSuman:1920.1920@practicecluster.zaoll.mongodb.net/day6AssignmentDB?retryWrites=true&w=majority"
    )
}

module.exports= connectDB;