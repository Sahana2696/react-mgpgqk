import React, { Component } from 'react';

export default class Country extends Component {
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
      <h5 >Region/Countrry</h5>
        <label>
          <input type="checkbox" defaultChecked={this.state.chkbox} />All
           </label><br />
        <label>
          <input type="checkbox" defaultChecked={this.state.chkbox} />
          Misc
      </label>
     
      </div>
    )
  }
}
