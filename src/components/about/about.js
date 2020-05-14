import React from "react";
import JSIcon from "../../images/javascript.inline.svg";
import HTMLIcon from "../../images/html5.inline.svg";
import CSSIcon from "../../images/css3.inline.svg";
import SASSIcon from "../../images/sass.inline.svg";
import StyledComponentsIcon from "../../images/styled-components.inline.svg";
import ReactIcon from "../../images/react.inline.svg";
import NextIcon from "../../images/next-dot-js.inline.svg";
import GatsbyIcon from "../../images/gatsby.inline.svg";
import ReduxIcon from "../../images/redux.inline.svg";
import JestIcon from "../../images/jest.inline.svg";
import CypressIcon from "../../images/cypress.inline.svg";
import TypescriptIcon from "../../images/typescript.inline.svg";

import NodeIcon from "../../images/node-dot-js.inline.svg";
import MongoDBIcon from "../../images/mongodb.inline.svg";
import HerokuIcon from "../../images/heroku.inline.svg";
import ExpressIcon from "../../images/expressjs.inline.svg";

import CIcon from "../../images/c.inline.svg";
import PythonIcon from "../../images/python.inline.svg";
import GitIcon from "../../images/github.inline.svg";

import ProfileImage from "./image";
import { Parallax } from 'react-scroll-parallax';


const AboutComponent = () => {
    return (
        <Parallax className="parallax" y={[-10, -10]} tagOuter="figure">
            <section className="about" id="about">
                <div className="about-content">
                    <h1 className="about-title section-title">Who is this guy?</h1>
                    <div className="description">
                        <p className="description-text">
                            My journey as a developer started from programming tiny microcontroller chips,
                            smart electronic devices, and finally landed to web development. 
                            I'm a person who is always willing to learn something new, challenge myself, explore new ideas and materialize them
                            into noice web experiences.
                    </p>
                        <div className="description-image">
                            <ProfileImage />
                        </div>
                    </div>

                    <div className="stack">
                        <h3 className="stack-title">My stack:</h3>
                        <div className="stack-item">
                            <h4 className="stack-group">Frontend</h4>
                            <div className="stack-container">
                                <div className="tech-item">
                                    <JSIcon />
                                    <span>Javascript</span>
                                </div>
                                <div className="tech-item">
                                    <TypescriptIcon />
                                    <span>Typescript</span>
                                </div>
                                <div className="tech-item">
                                    <HTMLIcon />
                                    <span>HTML5</span>
                                </div>
                                <div className="tech-item">
                                    <CSSIcon />
                                    <span>CSS</span>
                                </div>
                                <div className="tech-item">
                                    <SASSIcon />
                                    <span>SASS</span>
                                </div>
                                <div className="tech-item">
                                    <StyledComponentsIcon />
                                    <span>Styled Components</span>
                                </div>
                                <div className="tech-item">
                                    <ReactIcon />
                                    <span>React.js</span>
                                </div>
                                <div className="tech-item">
                                    <NextIcon />
                                    <span>Next.js</span>
                                </div>
                                <div className="tech-item">
                                    <GatsbyIcon />
                                    <span>Gatsby.js</span>
                                </div>
                                <div className="tech-item">
                                    <ReduxIcon />
                                    <span>Redux</span>
                                </div>
                                <div className="tech-item">
                                    <JestIcon />
                                    <span>Jest</span>
                                </div>
                                <div className="tech-item tech-item--cypress">
                                    <CypressIcon />
                                    <span>Cypress</span>
                                </div>
                            </div>
                        </div>
                        <div className="stack-item">
                            <h4 className="stack-group">Backend</h4>
                            <div className="stack-container">
                                <div className="tech-item">
                                    <NodeIcon />
                                    <span>Node.js</span>
                                </div>
                                <div className="tech-item tech-item--express">
                                    <ExpressIcon />
                                    <span>Express</span>
                                </div>
                                <div className="tech-item">
                                    <MongoDBIcon />
                                    <span>MongoDB</span>
                                </div>
                                <div className="tech-item">
                                    <HerokuIcon />
                                    <span>Heroku</span>
                                </div>
                            </div>
                        </div>
                        <div className="stack-item">
                            <h4 className="stack-group">Other</h4>
                            <div className="stack-container">
                                <div className="tech-item">
                                    <CIcon />
                                    <span>C</span>
                                </div>
                                <div className="tech-item">
                                    <PythonIcon />
                                    <span>Python</span>
                                </div>
                                <div className="tech-item">
                                    <PythonIcon />
                                    <span>Tkinter</span>
                                </div>
                                <div className="tech-item">
                                    <PythonIcon />
                                    <span>PyQt</span>
                                </div>
                                <div className="tech-item">
                                    <GitIcon />
                                    <span>Git</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Parallax>
    )
};

export default AboutComponent;