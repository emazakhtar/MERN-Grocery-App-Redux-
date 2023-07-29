import axios, * as others from "axios";

export const loginUser = "login/logInUser";
export const logoutUser = "login/logOutUser";

export function logInUser(value) {
  return {
    type: loginUser,
    payload: value,
  };
}
export function logOutUser(value) {
  return {
    type: logoutUser,
    payload: value,
  };
}
