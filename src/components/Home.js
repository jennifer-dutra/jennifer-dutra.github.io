// Home.js
import React, { Component } from 'react';
import computer from '../assets/computer.svg';
import '../App.css';

class Home extends Component {
  render() {
    return (
        <div>
          <h3 className="app">Hi I'm Jen</h3>
          <h1 className="app">Designer &amp; Developer</h1>
          <h4 className="app">I’m a Computer Science major passionate about coding, UI/UX design, &amp; tech for social good.
          </h4>
          <img src={computer}/> 
        </div>
        
    );
  }
}

export default Home;