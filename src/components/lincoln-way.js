import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Loader from './loader';
import '../App.css';

class LincolnWay extends Component {

  getTable(cards) {
    const getStringRows = this.getStringRows;
    return (
      <table className="table table-bordered table-striped table-hover table-responsive">
        <thead>
          <th>Name</th>
          <th>Labels</th>
          <th>EN</th>
          <th>CN</th>
          <th>Trello</th>
          <th>Pivotal Tracker</th>
        </thead>

          {cards.map(function(card){
            return (
              <tbody>
                <tr>
                  <td rowSpan={card.height}>{card.name}</td>
                  <td rowSpan={card.height}>
                    <ul>
                      {card.labels.map(function(label){
                        return (
                          <li>
                            <span class="o-label">{label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                  <td>{card.strings.EN[0]}</td>
                  <td>{card.strings.CN[0]}</td>
                  <td rowSpan={card.height}>
                    <a className="u-block o-link u-centered" href={card.trello} title="Go to the Trello card">*</a>
                  </td>
                  <td rowSpan={card.height}>
                    <a className="u-block o-link u-centered" href={card.tracker} title="Go to the Tracker story">*</a>
                  </td>
                </tr>
                {Array.apply(null, Array(card.height)).map(function(item, i){
                  if(i !== 0) {
                    return (
                      <tr>
                        <td>{card.strings.EN[i]}</td>
                        <td>{card.strings.CN[i]}</td>
                      </tr>
                    );
                  }
                }, this)}
              </tbody>
            );
          })}
      </table>
    );
  }

  renderContent() {
    if(this.props.app.content == null)
      return <Loader />
    else
      return this.getTable(this.props.app.content);
  }

  render() {
    console.log(this.props);
    return (
      <div className="app-body">
        <Helmet>
          <title>Lincoln Way Copy</title>
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

export default connect(mapStateToProps)(LincolnWay);
