const multer = require('multer');

// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop()); // Set the file name
    }
});

// Set up file filtering
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) { // Check if the file is an image
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Only image files are allowed'), false); // Reject the file
    }
};

// Create Multer instance with configuration
const upload = multer({
    storage: storage, // Use disk storage
    fileFilter: fileFilter, // Apply file filtering
    limits: {
        fileSize: 1024 * 1024 * 5 // Set file size limit to 5MB
    }
});

module.exports = upload;
