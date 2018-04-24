import React, { Component } from 'react';
const textContent = {
  'textAlign': 'center',
  'paddingTop': '10px'
}

export default class TextView extends Component {
  render() {
    return (
      <div className='text_view' style={textContent}>
        <b> Get motivated to move more, eat
            <br /> better, and live a healthy life. The Gear <br /> Sport tracks your fitness and diet, <br /> keeping you on the right path to reach <br /> your goals. It’s as stylish as it is <br /> functional.</b>
      </div>
    )
  }
};

