import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
class App extends Component {
  constructor() {
    super();

  }


  render() {
    return (
<div classNmae="page">
      <div className="main">
        <h3 class="col-sm-4" style={{ float: "left" }}> FedEx Services</h3>
        <h3 class="col-sm-4"> Customer Pricing Map</h3>
        <h3 class="col-sm-4" style={{ float: "right" }}> Meenakshi Uppala</h3>
        
      </div>
      <div className="well"> Search Option </div>

</div>

    );
  }
}

render(<App />, document.getElementById('root'));
