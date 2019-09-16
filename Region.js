import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export default class Region extends Component {
  constructor() {
    super();
    this.state = {
      chkbox: "true"
    }
  }
  render() {
    return (
      <div className=" col-lg-4 reg1">
        <div className=" col-lg-4 reg2">
          <h4> Region/Countrry</h4>
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            All
      </label>
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Misc
      </label>
        </div>


      </div>
    )
  }
}