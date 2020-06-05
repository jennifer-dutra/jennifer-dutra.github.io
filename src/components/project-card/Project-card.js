// Project-card.js
import React, { Component } from 'react';
import './Project-card.css';
import Fade from 'react-reveal/Fade';

class ProjectCard extends Component {

  render() {
    return (
        <div>
          <Fade delay={300}>
            <div className="clickable">
              <img className="prj-img" src={require('../../assets/images/' + this.props.img + '.png')}></img>
              <h2 className="prj-title">{this.props.name}</h2>
              <p className="prj-desc">{this.props.description}</p>
            
              <div className="skill-list">
                {this.props.skills.map(element => (
                  <span className={`${this.props.color}`}>{element}</span>
                ))}
              </div>
            </div>
          </Fade>
        </div>
    );
  }
}


export default ProjectCard;