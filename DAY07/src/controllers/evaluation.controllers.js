const express = require("express");
const router = express.Router();

const Evaluation = require("../models/evaluation.model");

router.get("", async (req, res) => {
	try {
		const evaluations = await Evaluation.find().lean().exec();
		return res.status(200).send(evaluations);
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.post("", async (req, res) => {
	try {
		const evaluation = await Evaluation.create(req.body);
		return res.status(200).send(evaluation);
	} catch (err) {
		return res.status(500).send(err);
	}
});
router.get("/:sid", async (req, res) => {
	try {
		const evaluation = await Evaluation.findById(req.params.sid, req.body)
			.populate({path:'subId', populate:{path:"studentId", select:"firstName"}})
			.lean()
			.exec();
		return res.status(200).send(evaluation);
	} catch (err) {
		return res.status(500).send(err);
	}
});
router.patch("/:sid", async (req, res) => {
	try {
		const evaluation = await Evaluation.findByIdAndUpdate(
			req.params.sid,
			req.body,
			{ new: true }
		);
		return res.status(200).send(evaluation);
	} catch (err) {
		return res.status(500).send(err);
	}
});

module.exports = router;
