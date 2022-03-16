"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const crypto_1 = __importDefault(require("crypto"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const path_1 = __importDefault(require("path"));
const s3 = new aws_sdk_1.default.S3({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const storageTypes = {
    s3: (0, multer_s3_1.default)({
        s3: s3,
        bucket: 'bucketteste9',
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const filename = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, filename);
            });
        }
    })
};
exports.default = {
    dest: path_1.default.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes.s3,
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Invalid file type.'));
        }
    }
};
//# sourceMappingURL=multer.js.map