import {
  APP_SWITCH
} from './types';

export const appSwitch = (name) => ({
  type: APP_SWITCH,
  payload: name
});
