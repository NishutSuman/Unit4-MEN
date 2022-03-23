const express = require("express");
const router = express.Router();
const {User, Login} = require("../models/user.models");

router.get("", async (req, res) => {
	try {
		const page = req.query.page || 1;
		const pagesize = req.query.pagesize || 2;

		const skip = (page - 1) * pagesize;

		const users = await User.find().skip(skip).limit(pagesize).lean().exec();

		const totalPage = Math.ceil(
			(await User.find().countDocuments()) / pagesize
		);
		return res.status(200).send({ users, totalPage });
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});

module.exports = router;
