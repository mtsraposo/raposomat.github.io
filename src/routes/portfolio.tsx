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
                                <a href={`https://raposomat.github.io/${project.path}`}
                                      key={project.number.toString()}
                                      className="portfolio-link">
                                    {`${project.number}. ${project.name}`}
                                </a>
                        ))}
                    </ul>
                </div>
        )
    }
}

export default Portfolio;