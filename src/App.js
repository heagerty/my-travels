import React,  { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">My Travels</h1>
          </header>
          <Travel
              destination="Kinsale"
              country="Ireland"
              photo="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/002/large/29389e7762514c88846da0ae79c22006/ireland-kinsale-town-052418-po.jpg"
              distance="800 miles"
          />
          <Travel
              destination="Rome"
              country="Italy"
              photo="https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200"
              distance="1000 miles"
          />
        </div>
    );
  }
}

export default App;