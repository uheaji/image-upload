import React from "react";
import UploadForm from "./components/UploadForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <h2>🌻 PHOTO BOOK 🌻</h2>
      <UploadForm />
    </div>
  );
}

export default App;
