import React from "react";
import LaptopIcon from "../../images/laptop.inline.svg";
import GithubIcon from "../../images/github.inline.svg";
import TechCardComponent from "./techCard";


const WorkCardComponent = ({ project }) => {
    return (
        <div className="card-wrapper">
            <div className="card-container">
                <a className="card-container--title" href={project.webLink} target="_blank" rel="noopener noreferrer">
                    {project.name}
                </a>
                <h3 className="card-container--desc">
                    {project.description}
                </h3>
                <div className="card-container--tech">
                    {project.stack.map((techItem, index) => {
                        return <TechCardComponent key={index} techItemName={techItem} />
                    })}
                </div>
                <div className="card-container--icons">
                    {project.githubLinks ? <a className="card-icon card-icon--github" href={project.githubLinks} target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                    </a> : null}
                    <a className="card-icon card-icon--laptop" href={project.webLink} target="_blank" rel="noopener noreferrer">
                        <LaptopIcon />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default WorkCardComponent;