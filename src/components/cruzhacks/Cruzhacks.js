import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import PrjHeading from '../prj-heading/Prj-heading.js';
import data from '../../data.json';
import './Cruzhacks.css';

class CruzHacks extends Component {

  render() {
    
    var json = data.projects[1];

    return (
      <div>
          <PrjHeading name={json.name} icon={json.icon} tools={json.tools} description={json.descriptionLong} color={json.color}></PrjHeading>
      </div>
    );
  }
}

export default CruzHacks;