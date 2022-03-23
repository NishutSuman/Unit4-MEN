const express = require("express");

require("dotenv").config();
const {User, Login} = require("../models/user.models");

const jwt = require("jsonwebtoken");
const newToken = (user) => {
	return jwt.sign({ user }, process.env.SEC_KEY);
};

// ! User Registration

const register = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.status(400).send("This email is already registered with us!!");
		}
		const token = newToken(user);
		user = await User.create(req.body);
		const msg = "User Registered Successfully !!";
		return res.status(200).send({ msg, user, token });
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
};

// ! User Login

const login = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.statsu(400).send("Email or Password may wrong!!");
		}
		let match = user.checkPwd(req.body.password);
		if (!match) {
			return res.statsu(400).send("Email or Password may wrong!!");
		}

		const token = newToken(user);
		const loginuser = await Login.create(req.body);
		const msg = "User LoggedIn Successfully !!";
		return res.status(200).send({ msg, loginuser, token });
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
};
module.exports = { register, login };
