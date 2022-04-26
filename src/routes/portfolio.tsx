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
                                <Link
                                        to={`/projects/${project.number}`}
                                        key={project.number.toString()}
                                >
                                    {`${project.number}. ${project.name}`}
                                </Link>
                        ))}
                    </ul>
                </div>
        )
    }
}

export default Portfolio;