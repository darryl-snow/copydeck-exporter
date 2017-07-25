import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Loader from './loader';
import '../App.css';

class LincolnWay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-body">
        <Helmet>
          <title>Lincoln Way Copy</title>
        </Helmet>
        <p className="u-centered">Lincoln Way.</p>
        { this.props.content == null ? <Loader /> : '' }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  pathname: state.router.location.pathname
});

export default connect(mapStateToProps)(LincolnWay);
