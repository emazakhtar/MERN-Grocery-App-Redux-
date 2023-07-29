import { loginUser, logoutUser } from "../actions/login";

export const loginReducer = (login = false, action) => {
  switch (action.type) {
    case loginUser:
      return !login;
    case logoutUser:
      return !login;
    default:
      return login;
  }
};
