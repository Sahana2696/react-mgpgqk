import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ServicesGroupType from './ServicesGroupType';
import Region from './Region';
import Search from './Search'
class App extends Component {
  constructor() {
    super();
    this.state = {
      chkbox: "true"
    }
  }


  render() {
    return (
      <div >
        <div className=" col-lg-12 main">
          <div className="col-lg-4">
            <h3 className="pull-left"> FedEx Services</h3>
          </div>
          <div className="col-lg-4">
            <h3> Customer Pricing Map</h3>
          </div>
          <div className="col-lg-4">
            <h3 className="pull-right"> Meenakshi Uppala</h3>
          </div>
        </div>
        <div className="well"> Search Option </div>
        <h5> Service Group Type</h5>
        <label>
          <input type="checkbox" defaultChecked={this.state.chkbox} />
          All
      </label><br />
        <div>
          <div>
            <ServicesGroupType />
          </div>
          <div>
            <Region />
          </div>
          <div>
          <Search/>
          </div>
        </div>




      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
