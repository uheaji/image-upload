const mongoose = require("mongoose");

// 스키마 생성
const ImageSchema = new mongoose.Schema(
    {
        key: { type: String, required: true }, // required: true => null이면 안됨.
        originalFileName: { type: String, required: true }
    },
    { timestamps: true } // 이미지가 create되는 시간
);

// 모델 생성
module.exports = mongoose.model("image", ImageSchema);