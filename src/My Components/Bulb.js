// Bulb Component...!

import React, { useState } from "react";
import Img1 from "./Bulb-Images/Img1.gif";
import Img2 from "./Bulb-Images/Img2.gif";

const Bulb = () => {

    // Handeling state here...!
    const [light, setLight] = useState(false);

    // Function to handle light...!
    const toggle = () => {
        setLight(!light);
    }

    return (
        <div className="container-fluid" id="bulb-container">

            <h1 className="bulb-header"> Bulb App using React JS </h1>

            <h2 className="light-header"> Light {(light) ? ('On') : ('Off')} </h2>
            
            <img
                alt="Light"
                src={(light) ? (Img2) : (Img1)}
                className="bulb"
            />
            <hr />
            <button onClick={toggle} className="btn btn-primary" id="light-btn"> {(light) ? ('Off') : ('On')} </button>
        </div>
    );
}

export default Bulb;