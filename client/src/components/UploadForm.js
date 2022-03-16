import React, { useState } from "react";

const UploadForm = () => {
    const [file, setFile] = useState(null); 
    const [fileName, setFileNAme] = useState("이미지 파일을 업로드 해주세요.");
    return (
      <form>
            <label htmlFor="image">{fileName}</label>
            <input
                id="image"
                type="file"
                onChange={(event) => {
                    const imageFile = event.target.files[0];
                    setFile(imageFile);
                    setFileNAme(imageFile.name)
                }}
            />
        <button type="submit">submit</button>
      </form>
    );
}

export default UploadForm;