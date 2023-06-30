import React from "react";
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Backtop() {
  return (
    <div className="float-button">
        <a className="float-button" href="#navbar">
            <FontAwesomeIcon icon={faArrowUp} size="lg" style={{color: "#ffffff", marginTop: 10}} /> 
        </a>
    </div>
  );
}

export default Backtop