// Stories Functional Slider Component...!

import React, { useState } from "react";
import img1 from "./Images/Super Man.png";
import img2 from "./Images/Bat Man.png";
import img3 from "./Images/Spider Man.png";
import img4 from "./Images/X Man.png";
import img5 from "./Images/Hulk.png";

// Importing Material UI Components...!
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const StorySlider = () => {
    // Handeling stories data...!
    const storiesData = [
        { ImageSrc: img1, title: "Super Man", story: "This is the story of Super Man" },
        { ImageSrc: img2, title: "Bat Man", story: "This is the story of Bat Man" },
        { ImageSrc: img3, title: "Spider Man", story: "This is the story of Spider Man" },
        { ImageSrc: img4, title: "X Man", story: "This is the story of X Man" },
        { ImageSrc: img5, title: "Hulk", story: "This is the story of Hulk" },
    ];

    // Handeling state here...!
    let [stories, setStories] = useState(storiesData);;
    let [initIndex, setInitIndex] = useState(0);

    // Function to move to the next story...!
    const nextStory = () => {
        let initIndexClone = initIndex;
        initIndexClone++;

        if (initIndexClone >= storiesData.length) {
            initIndexClone = 0;
        }

        setInitIndex(initIndexClone);
    }

    // Function to move to the previous story...!
    const previousStory = () => {
        let initIndexClone = initIndex;
        initIndexClone--;

        if (initIndexClone < 0) {
            initIndexClone = storiesData.length - 1;
        }

        setInitIndex(initIndexClone);
    }

    return (
        <div className="container-fluid" id="functional-slider-container">
            <h1 className="story-slider-head"> Functional Slider with Story! </h1>
            <div className="img-container">
                <h2 className="story-slider-head" id="story-head"> {stories[initIndex].title} </h2>
                <p className="story"> {stories[initIndex].story} </p>
                <div className="image-box">
                    <NavigateBeforeIcon onClick={previousStory} className="arrow-btns"> Beck </NavigateBeforeIcon>
                    <img src={stories[initIndex].ImageSrc} alt="Super Heroes" id="story-images" />
                    <NavigateNextIcon onClick={nextStory} className="arrow-btns"> Next </NavigateNextIcon>
                </div>
            </div>
        </div>
    );
}

export default StorySlider;