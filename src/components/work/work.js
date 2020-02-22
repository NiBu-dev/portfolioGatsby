import React from "react";
import WorkCardComponent from "./workCard";
import { Parallax } from 'react-scroll-parallax';

const WorkComponent = () => {
    const myWorkData = {
        "carblee": {
            name: "Carblee",
            description: "New Car buying platform.",
            githubLink: null,
            webLink: "https://www.carblee.com",
            stack: ["React.js", "Redux.js", "Next.js", "Styled Components"]
        },
        "spaceX": {
            name: "SpaceX Schedule",
            description: "small application which uses 3rd party api to display past and upcoming launches from SpaceX",
            githubLinks: "https://github.com/nbumbu/spaceSchedule",
            webLink: "https://spacex-schedule.netlify.com/",
            stack: ["React.js", "Redux.js", "Styled Components", "Gatsby.js", "Netlify"]
        },
        "pinMapper": {
            name: "Pin Mapper",
            description: "Helper app for engineers to map microcontroller peripherals to pins.",
            githubLinks: "https://github.com/nbumbu/pinMapperFrontend",
            webLink: "http://pin-pin-mapper.herokuapp.com/",
            stack: ["React.js", "Redux.js", "Styled Components", "Node.js", "MongoDB", "Heroku"]
        }
    }
    
    return (
        <Parallax className="parallax" y={[-20, 20]} tagOuter="figure">
            <section className="work" id="work">
                <div className="work-container">
                    <h2 className="work-container--title section-title">My Work</h2>
                    <div className="work-cards">
                        {Object.keys(myWorkData).map((project, index) => {
                            return <WorkCardComponent key={index} project={myWorkData[project]} />
                        })}
                    </div>
                </div>
            </section>
        </Parallax>

    )
};

export default WorkComponent;

