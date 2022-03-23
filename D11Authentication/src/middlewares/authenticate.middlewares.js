const { promise, reject } = require("bcrypt/promises");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const verifyToken = async (token) => {
	return new Promise((resolve, reject) => {
		var vt = jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
			if (err) return reject(err);

			return resolve(decoded);
		});
	});
};

const authenticate = async (req, res, next) => {
	if (!req.headers.authorisation) {
		return res
			.status(401)
			.send({ message: "Authorisation Token not found or incorrect !!" });
	}
	if (!req.headers.authorisation.startsWith("Bearer ")) {
		return res
			.status(401)
			.send({ message: "Authorisation Token not found or incorrect !!" });
	}

	const receivedToken = req.headers.authorisation.trim().split(" ")[1];

	let decoded;
	try {
		decoded = await verifyToken(receivedToken);
	} catch (err) {
		return res
			.status(500)
			.send({ message: "Authorisation Token not found or incorrect !!" });
	}
	req.user = decoded.user;
	return next();
};

module.exports= authenticate;