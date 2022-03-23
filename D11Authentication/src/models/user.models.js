const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

userSchema.pre("save", function (next) {
	const hashedPwd = bcrypt.hashSync(this.password, 8);
	this.password = hashedPwd;
	return next;
});

userSchema.methods.checkPwd = function (p) {
	return bcrypt.compareSync(p, this.password);
};

const User = mongoose.model("user", userSchema);

const loginSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const Login = mongoose.model("logindata", loginSchema);

module.exports = { User, Login };
