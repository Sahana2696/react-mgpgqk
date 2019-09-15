import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
export default class ServicesGroupType extends Component {
  constructor() {
    super();
    this.state = {
      chkbox: "true"
    }
  }


  render() {
    return (
      <div >
            <div className="page1">
              <h6 class="col-sm-4">FXE </h6><br/><br/><br/>
                <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Intra-country
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
            <div className="page2"><br/>
            
              <h6  class="col-sm-4">FXG </h6><br/><br/><br/>
               <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Intra Single Piece
      </label><br/>
                <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Intra MWT
      </label><br/>
               <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Export Single Piece
      </label><br/>
                <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Import Single Piece
      </label><br/>
                <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Export/Import MWT
      </label><br />
            </div>
          
      </div>
    )
  }
}