import {
  APP_SWITCH,
  GET_CONTENT
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  content: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_SWITCH:
      return Object.assign({}, state, {
        name: action.name,
        content: null
      });
    case GET_CONTENT:
      return Object.assign({}, state, {
        content: action.content,
        name: action.name
      });
    default:
      return state;
  }
};
