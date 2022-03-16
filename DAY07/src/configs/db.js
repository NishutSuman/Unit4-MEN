const mongoose= require("mongoose");

const connectDb= ()=>{ 
    return mongoose.connect(
        "mongodb+srv://NishutSuman:1920.1920@practicecluster.zaoll.mongodb.net/day7mvcAssignmentDB?retryWrites=true&w=majority"
    );
};

module.exports= connectDb;