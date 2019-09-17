import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ServicesGroupType from './ServicesGroupType';
import Region from './Region';
import Search from './Search'
import Customer from './Customer'
import LevelPricing from './LevelPricing';
import GroupType from './GroupType ';
import Country from './Country';


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
        <Header />

        <div className=" col-lg-12 pricing">
          <Customer />
        </div>

        <div className="well"> Search Option </div>

        <div>
          < LevelPricing />
        </div>

        <div>
          <GroupType />
        </div>

        <div>
          <div>
            <ServicesGroupType />
          </div>

          <div><Country/>
          </div>

          <div>
            <Region />
          </div>
          <div>
            <Search />
          </div>
        </div>





      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
