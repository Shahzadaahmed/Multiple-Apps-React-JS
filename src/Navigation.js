// App Navigation File...!

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav-bar" >
            <Link to="/" className="nav-links"> Home </Link>
            <Link to="/image-slider" className="nav-links"> Image Slider </Link>
            <Link to="/story-slider" className="nav-links"> Story Slider </Link>
            <Link to="/create-marksheet" className="nav-links"> Create Marksheet </Link>
            <Link to="/bulb" className="nav-links"> Bulb </Link>
            <Link to="/multiple-bulbs" className="nav-links"> Multiple Bulbs </Link>
        </div>
    );
}

export default Navigation;