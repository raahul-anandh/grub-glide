import React from "react";
import "./styles/Navi.css";

function Navi(props) {
  return (
    <div className="navi">
      <a href="#">{props.title}</a>
    </div>
  );
}

export default Navi;
