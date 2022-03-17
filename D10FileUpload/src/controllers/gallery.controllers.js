const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");

const Gallery = require("../models/gallery.models");
const uploadFiles = require("../middleware/fileupload.middleware");

router.get("", async (req, res) => {
	try {
		const userGallery = await Gallery.find().lean().exec();
		return res.status(200).send(userGallery);
	} catch (err) {
		return res.status(500).send({ message: "from get route " + err.message });
	}
});

router.post(
	"/uploadToGallery/:uid",
	uploadFiles("profile_pic", "multiple"),
	async (req, res) => {
		// console.log(req.file.path)
		try {
			const filePaths = req.files.map((file) => {
				return file.path;
			});
			const userGallery = await Gallery.create({
				profile_pic: filePaths,
				userId: req.params.uid,
			});
			return res.status(201).send(userGallery);
		} catch (err) {
			return res
				.status(500)
				.send({ message: "from post route " + err.message });
		}
	}
);

router.delete("/:galleryid", async (req, res) => {
	try {
		const target_gallery = await Gallery.findById(req.params.galleryid)
			.lean()
			.exec();
		const dp_path = target_gallery.profile_pic;
		// console.log(dp_path)
		dp_path.map((pics) => {
			fs.unlink(path.join(pics), (err) => {
				if (err) {
					throw err;
				}
				console.log(" All Gallery Pics Deleted successfully");
			});
		});
		const userGallery = await Gallery.findByIdAndDelete(req.params.uid);
		return res
			.status(201)
			.send({ message: "User's Gallery removed permanently" });
		// }
	} catch (err) {
		return res.status(500).send({ message: "from patch route " + err.message });
	}
});

module.exports = router;
