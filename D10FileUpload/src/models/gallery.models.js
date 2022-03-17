const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
	profile_pic: [{ type: String, required: true }],
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "userdata" },
},{
    versionKey:false,
    timestamps:true
});
module.exports = mongoose.model("gallerydata", gallerySchema);