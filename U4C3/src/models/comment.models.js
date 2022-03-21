const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
	{
		body: { type: String, required: true },
		bookId:{ type: mongoose.Schema.Types.ObjectId, ref:'book'},
		userId:{ type:mongoose.Schema.types.ObjectId, ref:'user'}
	},
	{
		versionKey: false,
		timeStamps: true,
	}
);
const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;