const mongoose = require("mongoose");

const connectDB = () => {
	return mongoose.connect(
		"mongodb+srv://NishutSuman:1920.1920@practicecluster.zaoll.mongodb.net/fileuplaod?retryWrites=true&w=majority"
	);
};

module.exports = connectDB;
