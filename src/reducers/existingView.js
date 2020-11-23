import { SET_USER_NAME } from '../actionTypes';

const initialState = {
  userName: ''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME: {
      const { userName } = action.payload;
      return {
        ...state,
        userName
      };
    }
    default:
      return state;
  }
}
