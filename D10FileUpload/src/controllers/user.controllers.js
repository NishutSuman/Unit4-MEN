const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const uploadFiles = require("../middleware/fileupload.middleware");

const User = require("../models/user.models");

router.get("", async (req, res) => {
	try {
		const users = await User.find().lean().exec();
		return res.status(200).send(users);
	} catch (err) {
		return res.status(500).send({ message: "from get route " + err.message });
	}
});

router.post("", uploadFiles("profile_pic", "single"), async (req, res) => {
	try {
		const user = await User.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			profile_pic: req.file.path,
		});
		return res.status(201).send(user);
	} catch (err) {
		return res.status(500).send({ message: "from post route " + err.message });
	}
});

router.patch(
	"/update-profile-pic/:uid",
	uploadFiles("profile_pic", "single"),
	async (req, res) => {
		try {
			const target_user = await User.findById(req.params.uid).lean().exec();
			const dp_path = target_user.profile_pic;
			// console.log(dp_path)
			if (dp_path) {
				fs.unlink(path.join(dp_path), (err) => {
					if (err) {
						throw err;
					}
					console.log("File Deleted successfully");
				});
				const user = await User.findByIdAndUpdate(
					req.params.uid,
					{
						profile_pic: req.file.path,
					},
					{ new: true }
				)
					.lean()
					.exec();
				return res.status(201).send(user);
			}
		} catch (err) {
			return res
				.status(500)
				.send({ message: "from patch route " + err.message });
		}
	}
);

router.delete("/:uid", async (req, res) => {
	try {
		const target_user = await User.findById(req.params.uid).lean().exec();
		const dp_path = target_user.profile_pic;
		// console.log(dp_path)
		if (dp_path) {
			fs.unlink(path.join(dp_path), (err) => {
				if (err) {
					throw err;
				}
				console.log(" User File Deleted successfully");
			});
			const user = await User.findByIdAndDelete(req.params.uid);
			return res.status(201).send({message: "User removed permanently"});
		}
	} catch (err) {
		return res.status(500).send({ message: "from patch route " + err.message });
	}
});

module.exports = router;
