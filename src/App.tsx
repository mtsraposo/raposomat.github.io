import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from "react-router-dom";

function App() {
    return (
            <div className="App">
                <header className="App-header">
                    <nav></nav>
                    <p>
                        Hello, <br/>
                        I'm Matheus Raposo, <br/>
                        Full Stack Developer
                    </p>
                    <Link to="/portfolio">Portfolio</Link>
                </header>
                <Outlet/>
            </div>
    );
}

export default App;
