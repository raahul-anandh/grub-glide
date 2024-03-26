import React from "react";
import "./styles/Navi.css";

function Navi(props) {
  return (
    <div className="navi-container">
      <a className="navi" href={props.link}>{props.title}</a>
    </div>
  );
}

export default Navi;
