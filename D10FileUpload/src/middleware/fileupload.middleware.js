const multer = require("multer");

const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../uploadedFiles"));
	},
	filename: function (req, file, cb) {
		const uniquePrefix = Date.now().toString();
		cb(null, uniquePrefix + "-" + file.originalname);
	},
});

function fileFilter(req, file, cb) {
	// The function should call `cb` with a boolean
	// to indicate if the file should be accepted
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		// To accept the file pass `true`, like so:
		cb(null, true);
	} else {
		// To reject this file pass `false`, like so:
		cb(new Error("File type not Supported..!"), false);
	}
}

const options = {
	storage: storage,
	fileFilter: fileFilter,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
};

const uploads = multer(options);

const uploadFiles = (formKey, method) => {
	return function (req, res, next) {
		let uploadItem;
		if (method == "single") {
			uploadItem = uploads.single(formKey);
		} else if (method === "multiple") {
			uploadItem = uploads.array(formKey, 5);
		}

		uploadItem(req, res, function (err) {
			if (err instanceof multer.MulterError) {
				// A Multer error occurred when uploading.
				return res.status(500).send({ message: err.message });
			} else if (err) {
				// An unknown error occurred when uploading.
				return res.status(500).send({ message: err.message });
			}

			// Everything went fine.
			return next();
		});
	};
};

module.exports = uploadFiles;
