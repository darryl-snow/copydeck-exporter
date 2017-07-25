import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Loader from './loader';
import '../App.css';

class LincolnWay extends Component {
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
          <title>Lincoln Way Copy</title>
        </Helmet>
        <p className="u-centered">Lincoln Way.</p>
        { this.state.loading? <Loader /> : '' }
      </div>
    );
  }
}

export default LincolnWay;
