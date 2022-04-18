import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from "react-router-dom";

function App() {
    return (
            <div className="App">
                <nav>
                    <Link to="portfolio">Portfolio</Link>
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
