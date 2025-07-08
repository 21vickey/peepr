// multer is a middleware for handling multipart/form-data, which is primarily used for uploading files
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Only image files are allowed!'), false); // Reject the file
    }
};

const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter, 
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB)
});

export default upload;
