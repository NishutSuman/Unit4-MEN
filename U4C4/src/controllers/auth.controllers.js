const express = require("express");
const { User, Login } = require("../models/user.models");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
	return jwt.sign({ user }, process.env.JWT_KEY);
};

const register = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.status(401).send("This email is already in use !!");
		}
		const token = newToken(user);
		user = await User.create(req.body);
		const msg = "User Registered Successfully !";
		return res.status(200).send({ msg, user, token });
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
};

const login = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(401).send("Invalid email or password !!");
		}
		const match = User.checkpwd(req.body.password);
		if (!match) {
			return res.status(401).send("Invalid email or password !!");
		}
		const token = newToken(user);
		const loggedinuser = await Login.create(req.body);
		const msg = "User Logged In Successfully";
		return res.status(200).send({ msg, loggedinuser, token });
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
};
module.exports= {register, login}