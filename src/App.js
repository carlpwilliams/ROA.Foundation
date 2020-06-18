import React from 'react';
import logo from './imgs/icon-whitepaper.svg';
import './App.css';

import Pdf from './whitepaper/Whitepaper_ROASc-Draft-4.pdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Record of achievement Smart Contract (ROASc)
        </p>
        <a
          className="App-link"
          href={Pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the Whitepaper
        </a>
      </header>
    </div>
  );
}

export default App;
