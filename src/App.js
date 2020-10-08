import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
      <div className="Netflix-Clone">
      <h1> Netflix Clone </h1>

<header className="App-header">


      <br />
      <p> This is homework React Project</p>

      <br />
      <hr />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isSmallRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isMediumRow/>
        <Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/> 

      </header>
      </div>

      
      );
}

export default App;
