import { SET_CALENDAR_STYLE } from '../actionTypes';

const initialState = {
  calendarStyle: ''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CALENDAR_STYLE: {
      const { calendarStyle } = action.payload;
      return {
        ...state,
        calendarStyle
      };
    }
    default:
      return state;
  }
}
