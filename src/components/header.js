import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button';
import { appSwitch, getContent } from '../actions';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.switchApp = this.switchApp.bind(this);

    if(props.pathname !== "/")
      this.switchApp(props.pathname.substring(1));

  }

  switchApp(app) {
    this.props.appSwitch(app);
    this.props.getContent(app);
  }

  render() {
    return (
      <div className="app-header">
        <Button app="fordpass" selected={this.props.app.name === 'fordpass'} onButtonClick={this.switchApp} />
        <Button app="lincolnway" selected={this.props.app.name === 'lincolnway'} onButtonClick={this.switchApp} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  pathname: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  appSwitch: (app) => dispatch(appSwitch(app)),
  getContent: (app) => dispatch(getContent(app))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
