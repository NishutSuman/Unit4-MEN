const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: "213a30f0525ba2", // generated ethereal user
		pass: "050d471ab1a3d5", // generated ethereal password
	},
})

module.exports= transporter;