import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import heart from './assets/icons/heart.svg';
import linkedin from './assets/icons/linkedin.svg';
import github from './assets/icons/github.svg';
import mail from './assets/icons/mail.svg';
import Pulse from 'react-reveal/Pulse';

class App extends Component {
  render() {
    return (
      <Router>
      <div> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav ml-auto">
            <li className="home-link"><Link to={'/'} className="nav-link"> Jen Dutra </Link></li>
            <li><Link to={'/'} className="nav-link">resume</Link></li>
            <li><Link to={'/about'} className="nav-link">about</Link></li>
            <li><Link to={'/'} className="nav-link"> portfolio </Link></li>
          </ul>
        </nav>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
        </Switch>
      </div>

      <footer className="footer">
        <ul>
          <li className="made-with">made with <Pulse forever delay={500}><img className="heart" src={heart}/></Pulse>  by jennifer dutra</li>
          <a href="https://github.com/jennifer-dutra"><li className="icon-pad"><img className="icon" src={github}/></li></a>
          <a href="mailto:jrdutra@ucsc.edu"><li className="icon-pad"><img className="icon" src={mail}/></li></a>
          <a href="https://www.linkedin.com/in/jennifer-dutra/"><li className="icon-pad"><img className="icon" src={linkedin}/></li></a>
        </ul>
      </footer>
    </Router>
    );
  }
}

export default App;
