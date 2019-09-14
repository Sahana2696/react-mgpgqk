import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
 export default class ServicesGroupType extends Component {
  constructor() {
    super();
    this.state={
      chkbox:"true"
    }
  }


  render() {
    return (
      <div>
       <h6 class="col-sm-4">FXE </h6><br/><br/><br/>
      <label>
      <input type="checkbox" defaultChecked={this.state.chkbox} />
      intra-country
      </label><br/>
      <label>
      <input type="checkbox" defaultChecked={this.state.chkbox} />
      Export
      </label><br/>
      <label>
      <input type="checkbox" defaultChecked={this.state.chkbox} />
      Import
      </label><br/>
      <label>
      <input type="checkbox" defaultChecked={this.state.chkbox} />
      Third-Party
      </label><br/>
      <label>
      <input type="checkbox" defaultChecked={this.state.chkbox} />
      Puerto Rico
      </label><br/>
      </div>
    )
  }
 }