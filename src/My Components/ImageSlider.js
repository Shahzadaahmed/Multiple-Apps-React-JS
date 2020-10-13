// Image Slider Component...!

import React, { Component } from "react";
import img1 from "./Images/Super Man.png";
import img2 from "./Images/Bat Man.png";
import img3 from "./Images/Spider Man.png";
import img4 from "./Images/X Man.png";
import img5 from "./Images/Hulk.png";

class ImageSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initIndex: 0,
            sliderImages: [img1, img2, img3, img4, img5]
        }
    }

    // Slider function...!
    slideShow = () => {
        let cloneSliderImages = this.state.sliderImages;
        let cloneIndex = this.state.initIndex;
        cloneIndex++;

        this.setState({
            initIndex: cloneIndex
        });

        if (cloneIndex === cloneSliderImages.length) {
            cloneIndex = 0;
            this.setState({
                initIndex: cloneIndex
            });
        }
    }

    componentDidMount() {
        setInterval(this.slideShow, 1000);
    }

    render() {
        return (
            <div className="container-fluid" id="image-slider-container">
                <h1 className="slider-head"> Image Slider in React JS </h1>
                <img src={this.state.sliderImages[this.state.initIndex]} alt="SliderImage" className="slide-show-image" />
            </div>
        )
    }
}

export default ImageSlider;