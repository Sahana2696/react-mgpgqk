import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export default class ServicesGroupType extends Component {
  constructor() {
    super();
    this.state = {
      chkbox: "true"
    }
  }
  render() {
    return (
    
      <div className="clr">

        <div className="col-lg-4 col2">
          <h6 > <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            FXE
      </label></h6>
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Intra-country
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Export
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Import
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Third-Party
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Puerto Rico
      </label><br />
        </div>

        <div className="col-lg-4 col2">

          <h6 className="col" ><label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            FXG
      </label></h6>
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Intra Single Piece
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Intra MWT
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Export Single Piece
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Import Single Piece
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Export/Import MWT
      </label><br />
        </div>

          <div className="col-lg-4 col2">

          <h6 className="col1" ><label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            FXF
      </label></h6>
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Intra Country
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
            Export
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
          Import
      </label><br />
          <label>
            <input type="checkbox" defaultChecked={this.state.chkbox} />
           Surcharges
      </label><br />
      <br/>
        </div>
      </div>
    )
  }
}