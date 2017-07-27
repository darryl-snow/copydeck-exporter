import {
  APP_SWITCH,
  GET_CONTENT
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  content: null,
  csv: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_SWITCH:
      return Object.assign({}, state, {
        name: action.name,
        content: null,
        csv: null
      });
    case GET_CONTENT:
      return Object.assign({}, state, {
        content: action.content,
        name: action.name,
        csv: action.csv
      });
    default:
      return state;
  }
};
