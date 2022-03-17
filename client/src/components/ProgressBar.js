import React from "react";
import "./ProgressBar.css"

// props로 'percent'를 받는다.
const ProgressBar = ({ percent }) => {
    return (
      <div className="progress-bar-box">
        <div style={{width: `${percent}%`}}>{percent}%</div>
      </div>
    );
};

export default ProgressBar;