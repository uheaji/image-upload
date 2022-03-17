import React, { useState } from "react";
import axios from "axios"; // axios는 HTTP비동기통신 라이브러리이다.
import "./UploadForm.css";
import { toast } from "react-toastify";
import ProgressBar from "./ProgressBar";


const UploadForm = () => {
  const defaultFileName = "Select images to upload ";
  const [file, setFile] = useState(null); 
  const [imgSrc, setImgSrc] = useState(null);
  const [fileName, setFileNAme] = useState(defaultFileName);
  const [percent, setPercent] = useState(0);
  

  const imageSelectHandler = (event) => {
    const imageFile = event.target.files[0];
    setFile(imageFile);
    setFileNAme(imageFile.name)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (e) => {
      setImgSrc(e.target.result);
    }
  };
  
  const onSubmit = async (e) => {
    e.preventDefault(); // default 액션을 실행하지 마라.
    const formData = new FormData();
    formData.append("image", file); // key-value 값으로 formData에 append
    try {
      const res = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: ( e ) => {
          setPercent(Math.round(100 * e.loaded / e.total));
        }
      });
      console.log({ res });
      toast.success("이미지 업로드 성공 😁");
      setTimeout(() => {
        setPercent(0);
        setFileNAme(defaultFileName);
        setImgSrc(null);
      }, 3000);
    } catch (err) {
      console.error(err);
      setPercent(0);
      setFileNAme(defaultFileName);
      setImgSrc(null);
      toast.error(err.message + " 😥");
    }
  };
  
    return (
      <form onSubmit={onSubmit}>
        <img className={`img-preview ${imgSrc && "img-preview-show"}`}src = {imgSrc} />
        <ProgressBar percent={percent} />
        <div className="file-dropper">
          {fileName}
          <input id="image" type="file" accept="image/jpeg" onChange={imageSelectHandler} />
        </div>
        <button className="submit-btn" type="submit">
          SUBMIT
        </button>
      </form>
    );
}

export default UploadForm;