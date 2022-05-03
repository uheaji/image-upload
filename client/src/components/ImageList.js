import React, { useContext } from "react";
import {ImageContext} from "../context/ImageContext"

const IamgeList = () => {
    const [images] = useContext(ImageContext);
    const imgList = images.map((image) => (
        <img key={image.key} style={{ width: "100%" }} src={`http://localhost:5000/uploads/${image.key}`} />
    ));
    return (
        <div style={{ maxWidth: 600, marginRight:"auto", marginLeft:"auto"}}>
            <h3>ImageList</h3>
            {imgList}
        </div>
    );
};

export default IamgeList;