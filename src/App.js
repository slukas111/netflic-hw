import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="Netflix Clone">
      <header className="App-header">

      <h1> Netflix Clone </h1>
      <br />
      <p> This is homework React Project</p>

      <hr />
      <div>
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals}/> 
      </div>
        </header>
    </div>
  );
}

export default App;
