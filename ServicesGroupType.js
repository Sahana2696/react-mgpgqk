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
      <div class="table-responsive">
        <table class=""table>
          <tbody>
            <div className="page1">
              <tr>
                <th><h6 class="col-sm-4">FXE </h6></th>
                <td> <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Intra-country
      </label></td><br />
                <td><label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Export
      </label> </td>
                <td> <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Import
      </label></td>
                <td>  <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Third-Party
      </label></td>
                <td>  <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Puerto Rico
      </label></td></tr>
            </div>
            <div className="page2">
              <tr >
              <th><h6 class="col-sm-4">FXG </h6></th>
                <td> <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Intra Single Piece
      </label></td>
                <td> <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Intra MWT
      </label></td>
                <td>  <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Export Single Piece
      </label></td>
                <td>  <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Import Single Piece
      </label></td>
                <td> <label>
                  <input type="checkbox" defaultChecked={this.state.chkbox} />
                  Export/Import MWT
      </label></td></tr><br />
            </div>
          </tbody>
        </table>
      </div>
    )
  }
}