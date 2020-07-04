import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import PrjHeading from '../prj-heading/Prj-heading.js';
import data from '../../data.json';
import './Tech4Good.css';

class Tech4Good extends Component {

  render() {
    
    var json = data.projects[3];

    return (
      <div>
          <PrjHeading name={json.name} icon={json.icon} tools={json.tools} description={json.descriptionLong} color={json.color}></PrjHeading>
      </div>
    );
  }
}

export default Tech4Good;