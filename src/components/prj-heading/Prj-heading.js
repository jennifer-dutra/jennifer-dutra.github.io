
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import './Prj-heading.css';

class PrjHeading extends Component {
  render() {
    return (
      <div>
          <Swing delay={800}>
            <img className="prj-icon" src={require('../../assets/images/' + this.props.icon + '.svg')}></img>
          </Swing>
          <Fade>
            <h2>{this.props.name}</h2>
            <h3 className="desc-txt">{this.props.description}</h3>
          </Fade>
          <Fade delay={200}>
          <div className="tool-list">
                {this.props.tools.map(element => (
                  <span className={`${this.props.color}`}>{element}</span>
                ))}
          </div>
          </Fade>
      </div>
    );
  }
}

export default PrjHeading;