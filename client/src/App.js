import React from "react";
import UploadForm from "./components/UploadForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IamgeList from "./components/ImageList";

const App = () => {
  return (
    <div style={{maxWidth:600, margin: "auto"}}>
      <ToastContainer />
      <h2>🌼 PHOTO BOOK 🌼</h2>
      <UploadForm />
      <IamgeList />
    </div>
  );
}

export default App;
