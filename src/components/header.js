import React, { Component } from 'react';
import Button from './button';
import { appSwitch } from '../actions';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.switchApp = this.switchApp.bind(this);

    this.state = {
      app: window.location.pathname.substring(1)
    };
  }

  switchApp(app) {
    this.setState({
      app: app
    });
    appSwitch(app);
  }

  render() {
    return (
      <div className="app-header">
        <Button app="fordpass" selected={this.state.app === 'fordpass'} onButtonClick={this.switchApp} />
        <Button app="lincolnway" selected={this.state.app === 'lincolnway'} onButtonClick={this.switchApp} />
      </div>
    );
  }
}

export default Header;
