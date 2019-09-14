import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
class App extends Component {
  constructor() {
    super();
    
    }
  

  render() {
    return (
    
    <div className="main">
       <h1> Customer Pricing Map</h1> 
       <h1 style={{float:"left"}}> FedEx Services</h1>
       <h1 style={{float:"right"}}> Meenakshi Uppala</h1>
     
      </div>
       
      
    );
  }
}

render(<App />, document.getElementById('root'));
