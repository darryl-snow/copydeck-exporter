import {
  APP_SWITCH
} from '../actions/types';

const INITIAL_STATE = {
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_SWITCH:
      console.log("app switched!");
      return {
        name: action.payload
      };
    default:
      return state;
  }
};
