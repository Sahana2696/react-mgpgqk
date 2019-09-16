import React, { Component } from 'react';
import {BrowserRouter,Route,Link,Switch}from 'react-router-dom';
import CustomerInformation from './CustomerInformation';
import PricingMap from './PricingMap';
import EanCount from './EanCount';
import CrossOpcoPriceType from './CrossOpcoPriceType';
export default class Customer extends Component {
  constructor() {
    super();
  }
  render(){
    return(
          <div>
        <BrowserRouter history>
          <div className="col-lg-12">
            <nav className="navbar navbar-light pull-right">
            <Link to='/CustomerInformation'>CustomerInformation</Link>
              <Link to='/PricingMap'>PricingMap</Link>
              <Link to='/EanCount'>EanCount</Link>
              <Link to='/CrossOpcoPriceType'>CrossOpcoPriceType</Link>
            </nav>
          </div>
          <div >
            <Switch>
            <Route exact path='/CustomerInformation' component={CustomerInformation} />
              <Route exact path='/PricingMap' component={PricingMap} />
              <Route exact path='/EanCount' component={EanCount} />
              <Route exact path='/CrossOpcoPriceType' component={CrossOpcoPriceType} />
            </Switch>
          </div>

        </BrowserRouter>
      </div>
    )
  }
}