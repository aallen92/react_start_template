import * as t from "../constants/authConstants";

export const markNotAuthenticated = () => (dispatch) => {
  dispatch({
    type: t.NOT_AUTHENTICATED,
  });
};
