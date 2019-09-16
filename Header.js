import React, { Component } from 'react';
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      chkbox: "true"
    }
  }
  render(){
    return(
<div className=" col-lg-12 main">
          <div className="col-lg-4">
            <h3 className="pull-left"> FedEx Services</h3>
          </div>
          <div className="col-lg-4">
            <h3> Customer Pricing Map</h3>
          </div>
          <div className="col-lg-4">
          <div>
            <h3 className=" col-lg-2 pull-right"> Meenakshi Uppala</h3>
            </div>
            <div>
              <h3 className="col-lg-2 pull-right">CPM Administrator</h3>
            </div>
          </div>
        </div>
    )
  }
}