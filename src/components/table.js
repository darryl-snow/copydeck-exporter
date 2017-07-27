import React, { Component } from 'react';
import ExternalLinkIcon from './external-link-icon';

class LincolnWay extends Component {
  getRows(cards) {
    let rows = [];
    this.props.cards.map(function(card){
      //push al the rows
      rows.push(
        <tr key={card.name}>
          <td rowSpan={card.height}>{card.name}</td>
          <td rowSpan={card.height}>
            {card.labels.map(function(label, i){
              return (
                <span className="o-label">{label}</span>
              );
            })}
          </td>
          <td>{card.strings.EN[0]}</td>
          <td>{card.strings.CN[0]}</td>
          <td rowSpan={card.height}>
            <a className="u-block o-link u-centered" href={card.trello} title="Go to the Trello card">
              <ExternalLinkIcon />
            </a>
          </td>
          <td rowSpan={card.height}>
            <a className="u-block o-link u-centered" href={card.tracker} title="Go to the Tracker story">
              <ExternalLinkIcon />
            </a>
          </td>
        </tr>
      );
      for(let i = 1; i < card.height; i++) {
        rows.push(
          <tr key={card.id + "-string-" + i}>
            <td>{card.strings.EN[i]}</td>
            <td>{card.strings.CN[i]}</td>
          </tr>
        );
      }
      return null;
    });
    return rows;
  }

  render() {
    return(
      <table className="table table-bordered table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Labels</th>
            <th>EN</th>
            <th>CN</th>
            <th>Trello</th>
            <th>Pivotal Tracker</th>
          </tr>
        </thead>
        <tbody>
          {this.getRows(this.props.cards)}
        </tbody>
      </table>
    )
  };
}

export default LincolnWay;
