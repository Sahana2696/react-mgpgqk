import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export default class LevelPricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: "true",
      chkbox:"true"
    }
  }
  render() {
    return (
      <div>
        <div className="col-lg-3 boxshadow " >
          <h6  className="Level"> 
           
            Level ID/EAN
      </h6>
          <div className="pl5">
            <label>
              <input type="radio" defaultChecked={this.state.chkbox} />
              Level ID
      </label><br />
            <label>
              <input type="radio" defaultChecked={this.state.chkbox} />
              EAN
      </label><br />
            <br />
          </div>
        </div>
        <div className="col-lg-3 boxshadow " >
          <h6 className="Level" > 
            
            Pricing Loaded Option
      </h6>
          <div className="pl5">
            <label>
              <input type="radio" defaultChecked={this.state.chkbox} />
              Pricing Loaded Only
      </label><br />
            <label>
              <input type="radio" defaultChecked={this.state.chkbox} />
              Pricing Loaded with inheritance
      </label><br />
            <br />
          </div>
        </div>
        <div className="col-lg-3 boxshadow " >
          <h6 className="Level">
           
            Hierarchy Comparsion Direction
      </h6>
          <div className="pl5">
            <label>
              <input type="radio" defaultChecked={this.state.chkbox} />
              Compare Down Hierarchy
      </label><br />
            <label>
              <input type="radio" defaultChecked={this.state.chkbox} />
              Compare Across Hierarchy
      </label><br />
            <br />
          </div>
        </div>
        <div className="col-lg-3 boxshadow " >
          <h6 className="Level"> 
            
            Excluded Status
     </h6>
          <div className="pl5">
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Cash
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Delete
      </label><br />
            <br />
          </div>
        </div>
      </div>
    )
  }
}