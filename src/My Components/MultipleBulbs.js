// Multiple Bulbs Component...!

import React, { useState } from "react";
import Img1 from "./Bulb-Images/Img1.gif";
import Img2 from "./Bulb-Images/Img2.gif";

const MultipleBulbs = () => {

    // Handeling state here...!
    const [lights, setLights] = useState(false);

    // Function to handle light...!
    const toggle = () => {
        setLights(!lights);
    }

    return (
        <div className="container-fluid" id="bulb-container">

            <h1 className="bulb-header"> Multiple Bulbs App using React JS </h1>

            <h2 className="light-header"> Lights {(lights) ? ('On') : ('Off')} </h2>

            <div>
                <img
                    alt="Lights"
                    src={(lights) ? (Img2) : (Img1)}
                    className="bulbs"
                />
                <img
                    alt="Lights"
                    src={(lights) ? (Img2) : (Img1)}
                    className="bulbs"
                />
                <img
                    alt="Lights"
                    src={(lights) ? (Img2) : (Img1)}
                    className="bulbs"
                />
                <img
                    alt="Lights"
                    src={(lights) ? (Img2) : (Img1)}
                    className="bulbs"
                />
                <img
                    alt="Lights"
                    src={(lights) ? (Img2) : (Img1)}
                    className="bulbs"
                />
            </div>

            <hr />
            <button onClick={toggle} className="btn btn-primary" id="light-btn"> {(lights) ? ('Off') : ('On')} </button>
        </div>
    );
}

export default MultipleBulbs;