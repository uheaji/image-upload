import React, { useEffect, useState } from "react";
import axios from "axios"; // 백엔드에서 호출할때 필요함 ❕
import UploadForm from "./components/UploadForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IamgeList from "./components/ImageList";

const App = () => {
   const [images, setImages] = useState([]);
    useEffect(() => {
        axios
            .get("/images")
            .then((result) => setImages(result.data))
            .catch((err) => console.error(err));
    }, []);
  return (
    <div style={{maxWidth:600, margin: "auto"}}>
      <ToastContainer />
      <h2>🌷 PHOTO BOOK 🌷</h2>
      <UploadForm images={images} setImages={setImages}/>
      <IamgeList images={images}/>
    </div>
  );
}

export default App;
