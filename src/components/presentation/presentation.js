import React from "react";
import FiguresBg from "./figuresBg";

const PresentationComponent = () => {
    return (
        <section className="presentation">
            <FiguresBg />
            <div className="presentation-container">
                <h1 className="presentation-name">
                    Hi, I'm Nico!
                </h1>
                <h3 className="presentation-position">
                    I'm a frontend developer.
                </h3>
            </div>
        </section>
    )
};

export default PresentationComponent;