// node.js에서는 모듈을 불러오기 위해 require()함수를 사용함.
require("dotenv").config(); // 환경변수 dotenv
const express = require("express"); // express
const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types")
const mongoose = require("mongoose");
const Image = require("./models/image");
// const Image = mongoose.model("image");

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
const PORT = 5000; // 포트 번호 설정

// MongoDB 연결
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connect!");
    app.use(express.static("uploads")); // 외부에서 파일접근

    // 사진정보 업로드
    app.post("/images", upload.single("image"), async(req, res) => {
      const image = await new Image(
        {
          key: req.file.filename,
          originalFileName: req.file.originalname
        }).save();
        res.json(image);
      }
    );

    // 사진정보 불러오기
    app.get("/images", async (req, res) => {
      const images = await Image.find();
      res.json(images);
    })

    // http 서버 실행
    app.listen(PORT, () =>
      console.log("Express server listening on PORT " + PORT)
    );
  })
  .catch((err) => console.log(err));

