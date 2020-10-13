// Main Routes File...!

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./My Components/Home";
import ImageSlider from "./My Components/ImageSlider";
import StorySlider from "./My Components/StorySlider";
import CreateMarksheet from "./My Components/CreateMarksheet";
import Marksheet from "./My Components/Marksheet";
import Bulb from "./My Components/Bulb";
import MultipleBulbs from "./My Components/MultipleBulbs";

// MyRoutes Component...!
const MyRoutes = () => {
    return (
        <Router>
            <Navigation />
            {/* Routes Area */}
            <Switch>
                <Route path="/multiple-bulbs" component={MultipleBulbs} />
                <Route path="/bulb" component={Bulb} />
                <Route path="/show-marksheet/:name/:rollNum/:htmlMarks/:cssMarks/:jsMarks/:esMarks/:reactJSMarks" component={Marksheet} />
                <Route path="/create-marksheet" component={CreateMarksheet} />
                <Route path="/story-slider" component={StorySlider} />
                <Route path="/image-slider" component={ImageSlider} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default MyRoutes;