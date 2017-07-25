import {
  APP_SWITCH
} from './types';

// export const calendarCreate = ({ name, theme }) => {
//   const windows = [];
//   return (dispatch) => {
//     IMGUR_API.get(theme).then((data) => {
//       const items = data.data.items;
//       let url = '';
//       console.log(data.data);
//       for (let i = 0; i < 24; i++) {
//         if ('cover' in items[i]) {
//           url = `https://i.imgur.com/${items[i].cover}.jpg`;
//         } else {
//           url = items[i].link;
//         }
//         windows.push(url);
//       }
//       console.log(windows);
//       dispatch({
//         type: CALENDAR_CREATE,
//         payload: { name, theme, windows }
//       });
//       Actions.saveCalendar({ type: 'reset' });
//     });
//   };
// };

export const appSwitch = ({ name }) => {
  return ({
    type: APP_SWITCH,
    payload: {
      app: name
    }
  });
};
