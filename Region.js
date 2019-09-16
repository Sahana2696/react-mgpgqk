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
      <div >
         <div className="disp-inline-flex ">
         <div className="country">
        <h5 >Region/Countrry</h5>
        <label>
          <input type="checkbox" defaultChecked={this.state.chkbox} />All
           </label><br />
        <label>
          <input type="checkbox" defaultChecked={this.state.chkbox} />
          Misc
      </label>
      </div>
      </div>
        <div className="region" >
          <div className="col-lg-2 boxshadow" >

            <h6 className="col-lg-12 reg1" ><label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              APAC
      </label></h6><br /><br /><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              America Samoa
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Australia
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Brunei
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Cambodia
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              China
      </label><br />
            <br />
          </div>
          <div className="col-lg-2 boxshadow" >


            <h6 className="col-lg-12 reg1" ><label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              CA
      </label></h6><br /><br /><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Canda
      </label><br />

            <br />
          </div>
          <div className="col-lg-2 boxshadow">

            <h6 className="col-lg-12 reg1" ><label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              EU
      </label></h6><br /><br /><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Albania
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Andorra
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Amenia
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Austria
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Azerbaijan
      </label><br />
            <br />
          </div>
          <div className="col-lg-2 boxshadow">

            <h6 className="col-lg-12 reg1" ><label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              LAC
      </label></h6><br /><br /><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Anguilla
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Antigua & Barbuda
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Argentia
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Aruba
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Bahamas
      </label><br />
            <br />
          </div>
          <div className="col-lg-2 boxshadow">

            <h6 className="col-lg-12 reg1" ><label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              MEISA
      </label></h6><br /><br /><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Afghanistan
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Algeria
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Angola
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />

              Bahrain
      </label><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
              Bangladesh
      </label><br />
            <br />
          </div>
             <div className="col-lg-2 boxshadow">


            <h6 className="col-lg-12 reg1" ><label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
            US
      </label></h6><br /><br /><br />
            <label>
              <input type="checkbox" defaultChecked={this.state.chkbox} />
            United states
      </label><br />

            <br />
          </div>
        </div>
      </div>
    )
  }
}