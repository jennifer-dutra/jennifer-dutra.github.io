import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

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
    </Router>
    );
  }
}

export default App;
