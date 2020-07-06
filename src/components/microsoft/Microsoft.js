import React, { Component } from 'react';
import './Microsoft.css';
import PrjHeading from '../prj-heading/Prj-heading.js';
import data from '../../data.json';


class Microsoft extends Component {

  render() {

    var json = data.projects[0];

    return (   
      <div className="container">
          <PrjHeading name={json.name} icon={json.icon} tools={json.tools} description={json.descriptionLong} color={json.color}></PrjHeading>
      </div>
    );
  }
}

export default Microsoft;
