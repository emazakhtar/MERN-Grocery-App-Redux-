import {
  loadCookieFullfilled,
  loadCookiePending,
  loadCookieRejected,
} from "../actions/cookie.js";

const initialState = {
  items: [],
  pending: false,
  error: null,
};
export const cookiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadCookieFullfilled:
      return {
        items: [...action.payload],
        pending: false,
        error: null,
      };

    case loadCookiePending:
      return {
        items: [...state.items],
        pending: true,
        error: null,
      };

    case loadCookieRejected:
      return {
        items: [...state.items],
        pending: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
