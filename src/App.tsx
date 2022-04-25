import React from 'react';
import logo from './fox.svg';
import './App.css';
import {Outlet, Link} from "react-router-dom";

function App() {
    return (
            <div className="App">
                <nav className="NavBar">
                    <img className="App-logo" src={logo}/>
                    <div>
                        <Link className="nav-link" to="about">About</Link>
                        <Link className="nav-link" to="skills">Skills</Link>
                        <Link className="nav-link" to="projects">Projects</Link>
                        <Link className="nav-link" to="contact">Contact</Link>
                    </div>
                </nav>
                <header className="App-header">
                    <p>
                        Hello, <br/>
                        I'm Matheus Raposo, <br/>
                        Full Stack Developer
                    </p>
                    <Outlet/>
                </header>
            </div>
    );
}

export default App;
