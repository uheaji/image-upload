import React, { useState } from "react";
import axios from "axios"; // axios는 HTTP비동기통신 라이브러리이다.
import "./UploadForm.css";



const UploadForm = () => {
  const [file, setFile] = useState(null); 
  const [fileName, setFileNAme] = useState("이미지 파일을 업로드 해주세요.");

  const imageSelectHandler = (event) => {
    const imageFile = event.target.files[0];
    setFile(imageFile);
    setFileNAme(imageFile.name)
  };
  
  const onSubmit = async (e) => {
    e.preventDefault(); // default 액션을 실행하지 마라.
    const formData = new FormData();
    formData.append("image", file); // key-value 값으로 formData에 append
    try {
      const res = await axios.post("/upload", formData, {
        headers: {"Content-Type": "multipart/form-data"},
      });
      console.log({ res });
      alert("Success !!")
    } catch (err) {
      console.error(err)
    }
  };
  
    return (
      <form onSubmit={onSubmit}>
        <div className="file-dropper">
          {fileName}
          <input id="image" type="file" onChange={imageSelectHandler} />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            borderRadius: 10,
            height: 40,
            cursor: "pointer",
            backgroundColor: "#94EB3E",
          }}
        >
          SUBMIT
        </button>
      </form>
    );
}

export default UploadForm;