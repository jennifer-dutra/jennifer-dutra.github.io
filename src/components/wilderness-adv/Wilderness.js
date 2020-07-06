import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import PrjHeading from '../prj-heading/Prj-heading.js';
import data from '../../data.json';
import './Wilderness.css';

import ReactImageAppear from 'react-image-appear';
import cardFront from '../../assets/images/card-fronts-mock.jpg';
import cardBacks from '../../assets/images/card-game-link.jpg';
import event from '../../assets/images/event-mock.jpg';
import water from '../../assets/images/water-mock.jpg';
import packaging from '../../assets/images/packaging-mock.jpg';
import rulebook from '../../assets/images/rulebook.jpg';

class Wilderness extends Component {

  render() {
    
    var json = data.projects[2];

    return (
      <div className="container">
          <PrjHeading name={json.name} icon={json.icon} tools={json.tools} description={json.descriptionLong} color={json.color}></PrjHeading>   
        
        <Fade>
          <h3>summary</h3>
          <p className="prj-para">
            As a part of my art class, Interaction Design &amp; Visual Communication, I designed my very own card game.
            The entire design and production process took 10 weeks and involved many playtests and iterations.
            My final product includes 100+ different cards with mostly original graphics, a color coded die, a rule book,
            and packaging to create a shelf-ready product. The game concept was inspired by the camping and backpacking trips my friends and I have been on.
            I transformed this idea into a card game that balances cooperation and competition between players.
          </p>
          <h3>final product</h3>
          <div className="img-row">
          <ReactImageAppear className="prj-img" src={cardFront} showLoader={false}
                  placeholderStyle={{ width: '500px', backgroundColor: '#F3BB88' }} />
                  
          <ReactImageAppear className="prj-img" src={cardBacks} showLoader={false}
                  placeholderStyle={{ width: '500px', backgroundColor: '#F3BB88' }} />
          </div>
          <div>
          </div>
          <div className="img-row">
            <ReactImageAppear className="prj-img" src={event} showLoader={false}
                    placeholderStyle={{ width: '500px', backgroundColor: '#F3BB88' }} />
                    
            <ReactImageAppear className="prj-img" src={water} showLoader={false}
                    placeholderStyle={{ width: '500px', backgroundColor: '#F3BB88' }} />
          </div>
          <div className="img-row">
            <ReactImageAppear className="prj-img" src={packaging} showLoader={false}
                    placeholderStyle={{ width: '500px', backgroundColor: '#F3BB88' }} />
                    
            <ReactImageAppear className="prj-img" src={rulebook} showLoader={false}
                    placeholderStyle={{ width: '500px', backgroundColor: '#F3BB88' }} />
          </div>
        </Fade>
      </div>
    );
  }
}

export default Wilderness;