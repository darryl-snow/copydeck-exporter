import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Loader from './loader';
import Table from './table';
import '../App.css';

class FordPass extends Component {
  renderContent() {
    if(this.props.app.content == null)
      return <Loader />
    else
      return <Table cards={this.props.app.content} />
  }
  render() {
    return (
      <div className="app-body">
        <Helmet>
          <title>FordPass Copy</title>
        </Helmet>
        <a className="u-centered u-block u-margin-top-bottom o-link" href="https://trello.com/b/Ug0AG4J5/translations-fordpass-lincoln-way" title="Go to the FordPass & Lincoln Way Translations Trello Board">Trello Board</a>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  pathname: state.router.location.pathname
});

export default connect(mapStateToProps)(FordPass);
