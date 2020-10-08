import React from 'react';
import './App.css';
import Row from './Row';

function App() {
  return (
    <div className="Netflix Clone">
      <header className="App-header">

      <h1> Netflix Clone </h1>
      <br />
      <p> This is homework React Project</p>

      <hr />
      <div>
        <Row title="Netflix Originals" />
        <Row title="Trending Now" />
        <Row title="Top Rated" /> 
      </div>
        </header>
    </div>
  );
}

export default App;
