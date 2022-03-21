const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");

const Publication = require("../models/publication.models");

router.post("", async (req, res) => {
	try {
		const publication = await Publication.create(req.body);

		return res.status(200).send(publication);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});

router.get("", async (req, res) => {
	try {
		const publications = await Publication.find().lean().exec();
		return res.status(200).send(publications);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});
module.exports = router;
