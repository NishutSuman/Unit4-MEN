const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: false },
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

userSchema.pre("save", function (next) {
	const hashedpwd = bcrypt.hashSync(this.password, 8);
	this.password = hashedpwd;
	return next();
});

userSchema.methods.checkpwd= function(pwd){
    return bcrypt.compareSync(pwd, this.password);
}

const loginSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const User = mongoose.model("user", userSchema);
const Login = mongoose.model("loginuser", loginSchema);

module.exports = { User, Login };
