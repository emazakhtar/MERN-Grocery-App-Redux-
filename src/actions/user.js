import axios, * as others from "axios";

export const loadUserFullfilled = "user/loadToUserFullfilled";
export const loadUserPending = "user/loadToUserPending";
export const loadUserRejected = "user/loadToUserRejected";

export const emptyUser = "user/emptyFromUser";
export const loadWishlistFullfilled = "user/loadToUsersWishlistFullfilled";
export const loadWishlistPending = "user/loadToUsersWishlistPending";
export const loadWishlistRejected = "user/loadToUsersWishlistRejected";

export const addWishlistFullfilled = "user/addToUsersWishlistFullfilled";
export const addWishlistPending = "user/addToUsersWishlistPending";
export const addWishlistRejected = "user/addToUsersWishlistRejected";

export const deleteWishlistFullfilled =
  "user/deleteFromUsersWishlistFullfilled";
export const deleteWishlistPending = "user/deleteFromUsersWishlistPending";
export const deleteWishlistRejected = "user/deleteFromUsersWishlistRejected";

// loadtouser action creators
export function loadToUser(formData) {
  return async (dispatch, getState) => {
    try {
      dispatch(loadToUserPending());
      const response = await axios.post(
        "http://localhost:8085/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      dispatch(loadToUserFullfilled(response.data));
    } catch (err) {
      dispatch(loadToUserRejected(err));
    }
  };
}
export function loadToUserFullfilled(value) {
  return {
    type: loadUserFullfilled,
    payload: value,
  };
}
export function loadToUserPending() {
  return {
    type: loadUserPending,
  };
}
export function loadToUserRejected(error) {
  return {
    type: loadUserRejected,
    payload: error,
  };
}

export function emptyFromUser(value) {
  return {
    type: emptyUser,
    payload: value,
  };
}
// loadtowishlist action creators
export function loadToUsersWishlist(userId) {
  return async (dispatch, getState) => {
    const authToken = localStorage.getItem("jwtToken");
    try {
      dispatch(loadToUsersWishlistPending());
      const response = await axios.get(
        "http://localhost:8085/user/wishlist/" + userId,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      dispatch(loadToUsersWishlistFullfilled(response.data));
    } catch (error) {
      dispatch(loadToUsersWishlistRejected(error));
    }
  };
}
export function loadToUsersWishlistFullfilled(value) {
  return {
    type: loadWishlistFullfilled,
    payload: value,
  };
}
export function loadToUsersWishlistPending() {
  return {
    type: loadWishlistPending,
  };
}
export function loadToUsersWishlistRejected(error) {
  return {
    type: loadWishlistRejected,
    payload: error,
  };
}
// add to wishlist action creators
export function addToUsersWishlist(data, id) {
  return async (dispatch, getState) => {
    const authToken = localStorage.getItem("jwtToken");
    try {
      dispatch(addToUsersWishlistPending());
      const response = await axios.post(
        "http://localhost:8085/user/wishlist/" + id,
        data,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      dispatch(addToUsersWishlistFullfilled(response.data));
    } catch (err) {
      dispatch(addToUsersWishlistRejected(err));
    }
  };
}
export function addToUsersWishlistFullfilled(value) {
  return {
    type: addWishlistFullfilled,
    payload: value,
  };
}
export function addToUsersWishlistPending() {
  return {
    type: addWishlistPending,
  };
}
export function addToUsersWishlistRejected(error) {
  return {
    type: addWishlistRejected,
    payload: error,
  };
}

// Delete from wishlist - action creators
export function deleteFromUsersWishlist(userId, itemId) {
  return async (dispatch, getState) => {
    const authToken = localStorage.getItem("jwtToken");
    try {
      dispatch(deleteFromUsersWishlistPending());
      const response = await axios.delete(
        "http://localhost:8085/user/wishlist/" + userId + "/" + itemId,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      dispatch(deleteFromUsersWishlistFullfilled(response.data));
    } catch (error) {
      dispatch(deleteFromUsersWishlistRejected(error));
    }
  };
}
export function deleteFromUsersWishlistFullfilled(value) {
  return {
    type: deleteWishlistFullfilled,
    payload: value,
  };
}
export function deleteFromUsersWishlistPending() {
  return {
    type: deleteWishlistPending,
  };
}
export function deleteFromUsersWishlistRejected(error) {
  return {
    type: deleteWishlistRejected,
    payload: error,
  };
}
