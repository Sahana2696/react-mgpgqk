import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ServicesGroupType from './ServicesGroupType';
import Region from './Region';
import Search from './Search'
import Customer from './Customer'
import  LevelPricing from './LevelPricing';

import Header from './Header'
class App extends Component {
  constructor() {
    super();
    this.state = {
      chkbox: "true"
    }
  }


  render() {
    return (
      <div >
      <Header/>
        <div className=" col-lg-12 pricing">
        <Customer/>
        </div>

        <div className="well"> Search Option </div>
        <div>
        < LevelPricing/>
        </div>
        <h5> Service Group Type</h5>
        <label>
          <input type="checkbox" defaultChecked={this.state.chkbox} />
          All
      </label><br />
        <div>
          <div>
            <ServicesGroupType />
          </div>
          <div>
            <Region />
          </div>
          <div>
          <Search/>
          </div>
        </div>
        




      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
