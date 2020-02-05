import React from "react";
// import ProfileImage from "./image";

const PresentationComponent = () => {
    return (
        <section className="presentation">
            <div className="presentation-container">
                {/* <div className="presentation-image">
                    <ProfileImage />
                </div> */}
                <h1 className="presentation-name">
                    Hi, I'm Nico!
                </h1>
                <h3 className="presentation-position">
                    And I'm a frontend developer.
                </h3>
            </div>
        </section>
    )
};

export default PresentationComponent;