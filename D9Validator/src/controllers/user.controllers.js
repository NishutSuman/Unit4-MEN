const express = require("express");
const router = express.Router();

const ValUser = require("../models/user.models");

const { body, validationResult } = require("express-validator");
console.log(body("first_name"));



router.post(
	"",
	body("first_name").notEmpty().withMessage("First Name should not be empty!!"),
	body("last_name").not().isEmpty().withMessage("Last Name should not be empty!!"),
	body("email").isEmail().withMessage('Please enter valid email address'),
	body("pincode").isLength({min:6, max:6}).withMessage('Please enter valid area pincode'),
	body("age").isInt({min:1, max:100}).withMessage('Age should between 1 to 100'),
	body("gender").custom(async (value)=>{
        if(value==("Male" || "Female" || "Others")){
            return true;
        }
        throw new Error("Enetr valid gender type !!")
    }),
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			const user = await ValUser.create(req.body);
			return res.status(201).send(user);
		} catch (err) {
			return res.status(500).send(err);
		}
	}
);

router.get("", async (req, res) => {
	try {
		const user = await ValUser.find().lean().exec();
		return res.status(201).send(user);
	} catch (err) {
		return res.status(500).send(err);
	}
});

module.exports = router;
