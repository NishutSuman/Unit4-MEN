const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate.middleware");
const Todo = require("../models/todo.models");

router.get("", authenticate, async (req, res) => {
	try {
		const todos = await Todo.find().lean().exec();
		return res.status(200).send(todos);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});
router.post("", authenticate, async (req, res) => {
	req.body.userId = req.user._id;
	try {
		const todo = await Todo.create(req.body);
		return res.status(200).send(todo);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});

router.patch("/:uid", authenticate, async (req, res) => {
	req.body.userId = req.user._id;
	try {
		const todos = await Todo.findByIdAndUpdate(req.params.uid, req.body, {
			new: true,
		})
			.lean()
			.exec();
		return res.status(200).send(todos);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});
router.delete("/:uid", authenticate, async (req, res) => {
	try {
		const todos = await Todo.findByIdAndDelete(req.params.uid);
		return res.status(200).send(todos);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});
module.exports = router;
