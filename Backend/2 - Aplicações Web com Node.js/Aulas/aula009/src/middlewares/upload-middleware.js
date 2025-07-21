const multer = require('multer');

const uploadMiddlewares = multer({
    dest: "uploads/"
});

module.exports = uploadMiddlewares;