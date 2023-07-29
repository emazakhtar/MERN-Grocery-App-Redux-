import axios, * as others from "axios";

export const loadFruitsFullfiled = "fruits/loadToFruitsFullfilled";
export const loadFruitsRejected = "fruits/loadToFruitsRejected";
export const loadFruitsPending = "fruits/loadToFruitsPending";

export const addFruitsFullfilled = "fruits/addToFruitsFullfilled";
export const addFruitsRejected = "fruits/addToFruitsRejected";
export const addFruitsPending = "fruits/addToFruitsPending";

export const deleteFruits = "fruits/deleteFromFruits";
export const updateFruits = "fruits/updateInFruits";

export async function loadToFruits(dispatch, getState) {
  try {
    dispatch(loadToFruitsPending());
    const resp = await axios.get("http://localhost:8085/collections/fruit");
    dispatch(loadToFruitsFulfilled(resp.data));
  } catch (err) {
    dispatch(loadToFruitsRejected(err));
  }
}
export function loadToFruitsFulfilled(value) {
  return {
    type: loadFruitsFullfiled,
    payload: value,
  };
}
export function loadToFruitsPending() {
  return {
    type: loadFruitsPending,
  };
}
export function loadToFruitsRejected(error) {
  return {
    type: loadFruitsRejected,
    payload: error,
  };
}
export function addToFruits(value) {
  return async (dispatch, getState) => {
    try {
      dispatch(addToFruitsPending());
      const resp = await axios.post(
        "http://localhost:8085/collection/fruit",
        value
      );
      dispatch(addToFruitsFullfilled(resp.data));
    } catch (err) {
      dispatch(addToFruitsRejected(err));
    }
  };
}
export function addToFruitsFullfilled(value) {
  return {
    type: addFruitsFullfilled,
    payload: value,
  };
}
export function addToFruitsPending() {
  return {
    type: addFruitsPending,
  };
}
export function addToFruitsRejected(error) {
  return {
    type: addFruitsRejected,
    payload: error,
  };
}

export function deleteFromFruits(value) {
  return {
    type: deleteFruits,
    payload: value,
  };
}
export function updateInFruits(value) {
  return {
    type: updateFruits,
    payload: value,
  };
}
