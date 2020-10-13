// Home Component...!

import React from "react";
import Typical from 'react-typical'

const Home = () => {
    return (
        <div className="container-fluid" id="home">
            <h1 className="home-header">
                <Typical
                    loop={Infinity}
                    steps={[
                        "My name is Shahzada Muhammad Ahmed.❤️",
                        1000,
                        "I am MERN Stack Developer.💻",
                        1000,
                        "I am a React JS Developer.💻",
                        1000,
                        "I am JavaScript Expert.💻",
                        1000,
                        "I am a student of Haider Ali Shah in Stack Learners.🥰",
                        1000,
                        "I can teach you this React JS Typing Animation.⌨️",
                        1000,
                        "I can teach you how to set Emoji in React JS.😘",
                        1000
                    ]}
                />
            </h1>
        </div>
    );
}

export default Home;