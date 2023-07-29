import axios, * as others from "axios";

// action constants for cookies
export const loadCookieFullfilled = "cookies/loadToCookiesFullfilled";
export const loadCookieRejected = "cookies/loadToCookiesRejected";
export const loadCookiePending = "cookies/loadToCookiesPending";

export const addCookie = "cookies/addToCookies";
export const deleteCookie = "cookies/deleteFromCookies";
export const updateCookie = "cookies/updateInCookies";

export async function loadToCookies(dispatch, getState) {
  try {
    dispatch(loadToCookiesPending());
    const resp = await axios.get("http://localhost:8085/collections/cookie");
    dispatch(loadToCookiesFullfilled(resp.data));
  } catch (err) {
    dispatch(loadToCookiesRejected(err));
  }
}
export function loadToCookiesFullfilled(value) {
  return {
    type: loadCookieFullfilled,
    payload: value,
  };
}
export function loadToCookiesPending() {
  return {
    type: loadCookiePending,
  };
}
export function loadToCookiesRejected(error) {
  return {
    type: loadCookieRejected,
    payload: error,
  };
}
export function addToCookies(value) {
  return {
    type: addCookie,
    payload: value,
  };
}
export function deleteFromCookies(value) {
  return {
    type: deleteCookie,
    payload: value,
  };
}
export function updateInCookies(value) {
  return {
    type: updateCookie,
    payload: value,
  };
}
