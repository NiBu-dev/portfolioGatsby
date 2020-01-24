import React from "react";
import WorkCardComponent from "./workCard";

const WorkComponent = () => {
    const myWorkData = {
        "carblee": {
            name: "Carblee",
            description: "New Car buying platform.",
            githubLink: null,
            webLink: "https://www.carblee.com"
        },
        "pinMapper": {
            name: "Pin Mapper",
            description: "Helper app for engineers to map microcontroller peripherals to pins.",
            githubLinks: "https://github.com/sahas023/pinMapperFrontend",
            webLink: "http://pin-pin-mapper.herokuapp.com/"
        }
    }
    return (
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
    )
};

export default WorkComponent;

