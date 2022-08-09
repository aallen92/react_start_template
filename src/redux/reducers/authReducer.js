import * as t from "../constants/authConstants";

export const authReducer = (
  state = {
    user: [],
    signedIn: null,
    loaded: false,
    actionStatus: null,
  },
  action
) => {
  switch (action.type) {
    case t.NOT_AUTHENTICATED:
      return {
        user: [],
        signedIn: false,
        loaded: false,
      };
    default:
      return state;
  }
};
