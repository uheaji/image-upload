const express = require("express");
const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types")

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"), // 파일 저장장소
  filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`), // 파일명
});
const upload = multer({storage}); // upload는 미들웨어

const app = express();
const PORT = 5000;

app.post('/upload', upload.single("imageTest"), (req, res) => {
    console.log(req.file);
    res.json(req.file);
});

app.listen(PORT, () => console.log("Express server listening on PORT " + PORT));