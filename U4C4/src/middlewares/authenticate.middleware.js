const { reject } = require("bcrypt/promises");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const verifyToken = async (token) => {
	return new Promise((resolve, reject) => {
		var decodedToken = jwt.verify(token, "wrong-secret", (err, decoded) => {
			if (err) return reject(err);

			return resolve(decoded);
		});
	});
};

const authenticate = async (req, res, next) => {
	if (!req.headers.authorization) {
		return res
			.status(401)
			.send("Authorization Token missing or not matched !!");
	}
	if (!req.headers.authorization.startsWith("Bearer ")) {
		return res
			.status(401)
			.send("Authorization Token missing or not matched !!");
	}
	const toekn = req.headers.authorization.trim().split(" ")[1];
	let decoded;
	try {
		decoded = await verifyToken(toekn);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
	req.user = decoded.user;
	return next();
};
module.exports= authenticate;