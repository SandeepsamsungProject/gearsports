import React, { Component } from 'react';
import { Figure } from './components/Figure';
import TextView from './components/TextView';
import Content from './components/Content';
import _ from 'lodash/throttle';
import gearSport from './images/img_section_00.png';
import secondSection from './images/img_section_01.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this); 
    this.state = {
      width: 800,
      height: 182
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate()
  };
  render() {
    console.log('state', this.state);
    return (
      <div className="gearsports_container">
        <Figure gearSport={gearSport} alertnate = {'One Gear Sport in black and another in blue'}/>
        <TextView/>
        <Figure gearSport={secondSection} />
        <Content/>
      </div>
    );
  }
}

export default App;
