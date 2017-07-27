import {
  APP_SWITCH,
  GET_CONTENT
} from './types';

var json2csv = require('json2csv');

const Trello = require("node-trello");
const trello = new Trello("5e2338229bbfde5aa814186f5fcb4551", "2e13495ac57cea7cffaa989ba654045ea58c46d953a5a91afc5353cd7c91beba");

const fields = [
  "Name",
  "Labels",
  "EN",
  "CN",
  "Trello",
  "Tracker"
];

function parseCSV(cards) {
  let arr = [];
  let content = {};
  let height = 0;
  for(let i = 0; i < cards.length; i++) {
    content = parseContent(cards[i].desc);
    height = Math.max(content.EN.length, content.CN.length);
    arr.push({
      Name: cards[i].name,
      Labels: parseLabels(cards[i].labels).join(),
      EN: content.EN[0],
      CN: content.CN[0],
      Trello: cards[i].shortUrl,
      Tracker: content.tracker.join()
    });
    for(let i = 1; i < height; i++) {
      arr.push({
        Name: "",
        Labels: "",
        EN: content.EN[i],
        CN: content.CN[i],
        Trello: "",
        Tracker: ""
      })
    }
  }
  return arr;
}

function getList(app) {
  switch(app) {
    case "fordpass":
      return "59649f0ea7325436d5236576";
    case "lincolnway":
      return "59649f1991e8fce2e8d57c69";
    default:
      return "";
  }
}

function parseCards(cards) {
  let arr = [];
  let row = {};
  let content = {};
  for(let i = 0; i < cards.length; i++) {
    row = {};
    content = {};
    row.id = cards[i].id;
    row.name = cards[i].name;
    row.trello = cards[i].shortUrl;
    row.labels = parseLabels(cards[i].labels);
    content = parseContent(cards[i].desc);
    row.strings = {
      EN: content.EN,
      CN: content.CN
    }
    row.pivotaltracker = content.tracker;
    row.height = Math.max(content.EN.length, content.CN.length);
    arr.push(row);
  }
  return arr;
}

function parseLabels(labels) {
  let arr = [];
  for (let i = 0; i < labels.length; i++) {
    if(labels[i].name !== "FordPass" && labels[i].name !== "Lincoln Way" && labels[i].name !== "fp" && labels[i].name !== "lw") {
      arr.push(labels[i].name);
    }
  }
  return arr;
}

function parseContent(desc) {
  let strings = desc.split(/\n/g);
  let EN = [];
  let CN = [];
  let tracker = [];

  for(let i = 0; i < strings.length; i++) {
    if(strings[i].trim().indexOf("EN:") !== -1)
      EN.push(strings[i].trim().substr(3).trim());
    if(strings[i].trim().indexOf("CN:") !== -1)
      CN.push(strings[i].trim().substr(3).trim());
    if(strings[i].trim().indexOf("https://") === 0)
      tracker.push(strings[i].trim().trim());
  }

  return {
    EN: EN,
    CN: CN,
    tracker: tracker
  }

}

export const appSwitch = (name) => ({
  type: APP_SWITCH,
  name: name
});

export const getContent = (name) => {

  const list = getList(name);

  return (dispatch) => {
    trello.get(`/1/lists/${list}/cards?fields=name,desc,shortUrl,labels`, (err, data) => {
      if (err) throw err;
      dispatch({
        type: GET_CONTENT,
        content: parseCards(data),
        csv: encodeURI("data:text/csv;charset=utf-8," + json2csv({data: parseCSV(data), fields: fields })),
        name: name
      });
    });
  };

}
