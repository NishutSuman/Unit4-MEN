const multer = require("multer");
const path = require("path");

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
	if (file.mimetype == "image/jpeg" || file.mmimetype == "image/png") {
		// To accept the file pass `true`, like so:
		cb(null, true);
	} else {
		// To reject this file pass `false`, like so:
		cb(new Error("File Format not supported !!"), false);
	}
}

const options = {
	storage: storage,
	fileFilter: fileFilter,
	limit: {
		fileSize: 1024 * 1024 * 5,
	},
};

const upload = multer(options);

module.exports = upload;
