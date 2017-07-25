import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Loader from './loader';
import '../App.css';

class LincolnWay extends Component {
  renderContent() {
    if(this.props.app.content == null)
      return <Loader />
    else
      return <p>{JSON.stringify(this.props.app.content)}</p>
  }
  render() {
    console.log(this.props);
    return (
      <div className="app-body">
        <Helmet>
          <title>Lincoln Way Copy</title>
        </Helmet>
        <p className="u-centered">Lincoln Way.</p>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  pathname: state.router.location.pathname
});

export default connect(mapStateToProps)(LincolnWay);
