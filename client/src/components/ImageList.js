import React, { useEffect, useState } from "react";
import axios from "axios"; // 백엔드에서 호출할때 필요함 ❕

const IamgeList = ({images}) => {
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