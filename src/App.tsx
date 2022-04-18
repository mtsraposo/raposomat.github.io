import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, <br />
          I'm Matheus Raposo, <br />
          Full Stack Developer
        </p>
        <button
          onClick={()=>{console.log('1')}}
          style={{textDecorationLine: "underline",
          color: 'blue'}}
        >
          Portfolio
        </button>
      </header>
    </div>
  );
}

export default App;
