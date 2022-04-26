import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/fox.svg";
import '../../App.css'


class Nav extends React.Component {
    render() {
        return (
                <nav className="NavBar">
                    <img className="App-logo" src={logo}/>
                    <div>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="about">About</Link>
                        <Link className="nav-link" to="portfolio">Portfolio</Link>
                        <Link className="nav-link" to="contact">Contact</Link>
                    </div>
                </nav>
        )
    }
}

export default Nav;