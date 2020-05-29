// Home.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import computer from '../../assets/images/computer.svg';
import './Home.css';
import Fade from 'react-reveal/Fade';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="hero">
          <div className="hero-txt">
            <Fade down>
              <h3 className="underlined">Hi I'm Jen</h3>
            </Fade>
            <Fade down delay={800} distance={"0.25em"}>
              <h1>Developer <span className="accent-txt">&amp;</span> Designer</h1>
            </Fade>
            <Fade down delay={1200} distance={"0.25em"}>
              <h4>I’m a Computer Science major passionate about coding, UI/UX design, &amp; tech for social good.</h4>
            </Fade>
            <Fade down delay={1500} distance={"0.25em"}>
               <Link to={'/about'}><button type="button" className="blue-button">about me</button></Link>
            </Fade>
          </div>
          <Fade>
            <div className="hero-img">
              <img src={computer} alt={""}/> 
            </div>
          </Fade>
        </div>
        <Fade down delay={1700}>
          <div className="projects">
            <h2>my work</h2> 
          </div>
        </Fade>
      </div>
        
    );
  }
}

export default Home;