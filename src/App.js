import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import heart from './assets/icons/heart.svg';
import linkedin from './assets/icons/linkedin.svg';
import github from './assets/icons/github.svg';
import mail from './assets/icons/mail.svg';
import menu from './assets/icons/menu.svg';
import Pulse from 'react-reveal/Pulse';
import pdf from './Resume-5-2020.pdf';
import Wilderness from './components/wilderness-adv/Wilderness';
import CruzHacks from './components/cruzhacks/Cruzhacks';
import MidnightBoba from './components/midnight-boba/Midnight-boba';
import Tech4Good from './components/tech4good/Tech4Good';

class App extends Component {
  container = React.createRef();
  state = {
    open: false,
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };

  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <Router>
      <div> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav ml-auto">
            <li className="home-link">Jen Dutra</li>
            <li><a href={pdf} className="nav-link">resume</a></li>
            <li><Link to={'/about'} className="nav-link">about</Link></li>
            <li><Link to={'/'} className="nav-link">home</Link></li>
          </ul>
        </nav>

        <div className="dropdown-container" ref={this.container}>
          <button className="dropdown-btn" onClick={this.handleButtonClick}>
                <img src={menu}></img>
          </button>
          {this.state.open && (
          <div class="dropdown">
            <ul>
              <li><Link to={'/'}>home</Link></li>
              <li><Link to={'/about'}>about</Link></li>
              <li><a href={pdf}>resume</a></li>
            </ul>
          </div>
          )}
        </div>
        
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/wilderness adventure' component={Wilderness} />
            <Route path='/cruzhacks' component={CruzHacks} />
            <Route path='/midnight boba' component={MidnightBoba} />
            <Route path='/tech4good' component={Tech4Good} />
        </Switch>
      </div>

      <footer className="footer">
        <ul>
          <li className="made-with">made with <Pulse forever delay={500}><img className="heart" src={heart}/></Pulse>  by jennifer dutra</li>
          <div className="icons">
            <a href="https://github.com/jennifer-dutra"><li className="icon-pad"><img className="icon" src={github}/></li></a>
            <a href="mailto:jrdutra@ucsc.edu"><li className="icon-pad"><img className="icon" src={mail}/></li></a>
            <a href="https://www.linkedin.com/in/jennifer-dutra/"><li className="icon-pad"><img className="icon" src={linkedin}/></li></a>
          </div>
        </ul>
      </footer>
    </Router>
    );
  }
}

export default App;
