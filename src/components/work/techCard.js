import React from "react";
import ReactIcon from "../../images/react.inline.svg";
import NextIcon from "../../images/next-dot-js.inline.svg"
import StyledComponentsIcon from "../../images/styled-components.inline.svg"
import NodeJsIcon from "../../images/node-dot-js.inline.svg";
import MongoDbIcon from "../../images/mongodb.inline.svg";
import HerokuIcon from "../../images/heroku.inline.svg"

const TechCardComponent = ({ techItemName }) => {
    let icon = null;
    let style = "card-box";

    switch (techItemName) {
        case "React.js": {
            icon = <ReactIcon />
            style += " card-box--react"
            break;
        }
        case "Next.js": {
            icon = <NextIcon />
            style += " card-box--next"
            break;
        }
        case "Styled Components": {
            icon = <StyledComponentsIcon />
            style += " card-box--styledcomponents"
            break;
        }
        case "Node.js": {
            icon = <NodeJsIcon />
            style += " card-box--nodejs"
            break;
        }
        case "MongoDB": {
            icon = <MongoDbIcon />
            style += " card-box--mongodb"
            break;
        }
        case "Heroku": {
            icon = <HerokuIcon />
            style += " card-box--heroku"
            break;
        }
        default: break;
    }

    return (
        <div className={style}>
            {icon}
            <span>{techItemName}</span>
        </div>
    )
};

export default TechCardComponent;