import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import PrjHeading from '../prj-heading/Prj-heading.js';
import data from '../../data.json';
import './Wilderness.css';

class Wilderness extends Component {

  render() {
    
    var json = data.projects[2];

    return (
      <div>
          <PrjHeading name={json.name} icon={json.icon} tools={json.tools} description={json.descriptionLong}></PrjHeading>
      </div>
    );
  }
}

export default Wilderness;