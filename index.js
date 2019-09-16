import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ServicesGroupType from './ServicesGroupType';
class App extends Component {
  constructor() {
    super();
   this.state={
     chkbox:"true"
   }
  }


  render() {
    return (
<div className="page">
       <div className="main">
        <h3 class="col-sm-4" style={{ float: "left" }}> FedEx Services</h3>
        <h3 class="col-sm-4"> Customer Pricing Map</h3>
        <h3 class="col-sm-4" style={{ float: "right" }}> Meenakshi Uppala</h3>
        
       </div>
       <div className="well"> Search Option </div>
       <h5> Service Group Type</h5>
       <label>
      <input type="checkbox" defaultChecked={this.state.chkbox} />
      All
      </label><br/>
      
       <ServicesGroupType/>
       
      
      

</div>

    );
  }
}

render(<App />, document.getElementById('root'));
