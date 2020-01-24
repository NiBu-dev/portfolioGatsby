import React from "react";
import GithubImage from "../images/githubImage64"
import LinkedinImage from "../images/linkdeinImage";

const FooterComponent = () => {
    return (
        <footer className="footer">
            <a className="img-wrapper" href="https://github.com/sahas023" target="_blank" rel="noopener noreferrer">
                <GithubImage />
            </a>
            <a className="img-wrapper" href="https://www.linkedin.com/in/nicolae-bumbu-473940159/" target="_blank" rel="noopener noreferrer">
                <LinkedinImage />
            </a>
            <div className="tnc">
                Bumbu Nicolae, &#x24B8; 2020
            </div>
        </footer>
    )
};

export default FooterComponent;