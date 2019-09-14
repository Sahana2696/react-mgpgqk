import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import PricingMap from './PricingMap';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
    <PricingMap/>
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
