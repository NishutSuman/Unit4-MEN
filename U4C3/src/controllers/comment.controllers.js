const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");



const Comment = require("../models/comment.models");

router.post(
	"",
	body("body")
		.not()
		.isEmpty()
		.withMessage(
			"Comment should not be empty..!"
		),
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const comment = await Comment.create(req.body);
			const msg = "User Created Successfully !";
			return res.status(200).send({ msg, comment });
		} catch (err) {
			return res.status(500).send({ message: err.message });
		}
	}
);

router.get("", async(req,res)=>{
    try{
        const page= req.query.page || 1;
        const pagesize= req.query.pagesize || 10;
        const skip= (page-1)*pagesize;

        const comments= await Comment.find().skip(skip).limit(pagesize).lean().exec();
        return res.status(200).send(comments);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})
module.exports = router;
