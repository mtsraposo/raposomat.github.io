import {Link} from 'react-router-dom';
import React from "react";
import {getPortfolio} from '../data/portfolio';
import "./routes.css";

class Portfolio extends React.Component {
    render() {
        let portfolio = getPortfolio();
        return (
                <div className="portfolio">
                    <ul>
                        {portfolio.map((project) => (
                                <div>
                                    <a href={project.url}
                                       key={project.id.toString()}
                                       className="portfolio-link"
                                       target="_blank">
                                        {`${project.id}. ${project.name}`}
                                    </a>
                                </div>
                        ))}
                    </ul>
                </div>
        )
    }
}

export default Portfolio;