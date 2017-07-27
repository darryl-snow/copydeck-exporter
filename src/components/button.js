import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Button extends Component {

  handleClick = () => {
    this.props.onButtonClick(this.props.app);
  }

  render() {
    return (
        <Link to={process.env.PUBLIC_URL + "/" + this.props.app} className={this.props.selected ? "button button--selected button--large button--" + this.props.app : "button button--large button--" + this.props.app} onClick={this.handleClick}></Link>
    );
  }
}

export default Button;
