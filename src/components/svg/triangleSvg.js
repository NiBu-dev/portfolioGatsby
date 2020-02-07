import React from "react";

const Triangle = ({ className }) => {

    return (
        <svg viewBox="0 0 30 30" className={className}>
            <polygon strokeWidth="1px" strokeLinejoin="round" strokeMiterlimit="10" points="14.921,2.27 28.667,25.5 1.175,25.5 "></polygon>
        </svg>
    )
};

export default Triangle;