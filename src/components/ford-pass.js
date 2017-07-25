import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Loader from './loader';
import '../App.css';

class FordPass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="app-body">
        <Helmet>
          <title>FordPass Copy</title>
        </Helmet>
        <p className="u-centered">FordPass.</p>
        { this.state.loading? <Loader /> : '' }
      </div>
    );
  }
}

export default FordPass;
