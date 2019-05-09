// Home.js
import React, { Component } from 'react';
import computer from '../assets/computer.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="hero">
          <div className="hero-txt">
            <h3>Hi I'm Jen</h3>
            <h1>Designer &amp; Developer</h1>
            <h4>I’m a Computer Science major passionate about coding, UI/UX design, &amp; tech for social good.
            </h4>
            <button type="button" className="blue-button">my work</button>
          </div>
          <div className="hero-img">
            <img src={computer} alt={""}/> 
          </div>
        </div>
        <div className="projects">
          <h2>projects</h2> 
        </div>
      </div>
        
    );
  }
}

export default Home;