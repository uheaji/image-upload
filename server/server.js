const express = require("express");
const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types")

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"), // 파일 저장장소
  filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`), // 파일명
});
const upload = multer({
    storage, fileFilter: (req, file, cb) => { // 이미지 필터
        if (["image/jpeg", "image/png"].includes(file.mimetype)) cb(null, true)
        else cb(new Error("invalid file type"), false);
    },
    limits: {
        fileSize: 1024 * 1024 * 5 // 5메가바이트
    }
}); // upload는 미들웨어

const app = express();
const PORT = 5000;

app.use(express.static("uploads")); // 외부에서 파일접근

app.post('/upload', upload.single("imageTest"), (req, res) => {
    console.log(req.file);
    res.json(req.file);
});

app.listen(PORT, () => console.log("Express server listening on PORT " + PORT));