import React, { Component } from 'react';

export default class GroupType extends Component {
  constructor() {
    super();
    this.state = {
      chkbox: "true"
    }
  }
  render()
  {
    return(
      <div className="pl10 pt20 clr-both">
      <h5> Service Group Type</h5>
        <label>
          <input type="checkbox" defaultChecked={this.state.chkbox} />
          All
      </label><br />
      </div>
    )
  }
}
