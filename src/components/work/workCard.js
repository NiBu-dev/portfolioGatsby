import React from "react";
import GithubImage from "./githubImage";
import LiveWebImage from "./liveWebImage"

const WorkCardComponent = ({project}) => {
    return (
        <div className="card-wrapper">
            <div className="card-container">
                <h2 className="card-container--title">
                    {project.name}
                </h2>
                <h3 className="card-container--desc">
                    {project.description}
                </h3>
                <div className="card-container--icons">
                    {project.githubLinks ?  <a className="card-container--icon" href={project.githubLinks} target="_blank" rel="noopener noreferrer">
                        <GithubImage />
                    </a> : null}
                    <a className="card-container--icon" href={project.webLink} target="_blank" rel="noopener noreferrer">
                        <LiveWebImage />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default WorkCardComponent;