import React from "react";
import "./routes.css"

class About extends React.Component {
    render() {
        return (
                <div className="about">
                    <h3>About Me</h3>
                    <p>
                        I'm a Full Stack Developer from Brazil. <br/><br/>
                        Since graduating in 2018, I've been working a full-time job in the back-end,
                        while learning other tech stacks as part of side projects. <br/><br/>
                        I have a passion for building applications that are useful to solve real problems.
                        For that, I'm constantly seeking and learning new technologies that seem promising to contribute to that mission.
                    </p>
                </div>
        );
    }
}

export default About;