import React, { Component } from 'react';
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      chkbox: "true"
    }
  }
  render() {
    return (
      <div className=" col-lg-12 main">
        <div className="col-lg-4">
          <h3 className="pull-left"> FedEx Services</h3>
        </div>
        <div className="col-lg-4">
          <h3> Customer Pricing Map</h3>
        </div>
        <div className="col-lg-2 pull-right pl10">
          <div>
            <span className="fontsize"> Meenakshi Uppala</span>
          </div>
          <div>
            <span className="fontsize">CPM Administrator</span>
          </div>
        </div>
      </div>
    )
  }
}