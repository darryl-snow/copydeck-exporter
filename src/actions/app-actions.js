import {
  APP_SWITCH,
  GET_CONTENT
} from './types';

const Trello = require("node-trello");

const trello = new Trello("5e2338229bbfde5aa814186f5fcb4551", "2e13495ac57cea7cffaa989ba654045ea58c46d953a5a91afc5353cd7c91beba");

function getList(app) {
  switch(app) {
    case "fordpass":
      return "59649f0ea7325436d5236576";
    case "lincolnway":
      return "59649f1991e8fce2e8d57c69";
  }
}

export const appSwitch = (name) => ({
  type: APP_SWITCH,
  name: name
});

export const getContent = (name) => {

  const list = getList(name);

  return (dispatch) => {
    trello.get(`/1/lists/${list}/cards?fields=name,desc,shortUrl`, (err, data) => {
      if (err) throw err;
      dispatch({
        type: GET_CONTENT,
        content: data,
        name: name
      });
    });
  };

}
