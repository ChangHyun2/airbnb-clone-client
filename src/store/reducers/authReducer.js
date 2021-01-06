import { SET_CURRENT_USER, USER_LOADING } from '../actions/authActionTypes';

const initialState = {
  user: {},
  isAuth: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      const user = action.payload;

      if (user) {
        return {
          ...state,
          isAuth: true,
          user,
        };
      }
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    }
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
