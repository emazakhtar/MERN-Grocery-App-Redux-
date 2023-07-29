import axios, * as others from "axios";

export const loadNutsFullfilled = "nuts/loadToNutsFullfilled";
export const loadNutsPending = "nuts/loadToNutsPending";
export const loadNutsRejected = "nuts/loadToNutsRejected";

export const addNuts = "nuts/addToNuts";
export const deleteNuts = "nuts/deleteFromNuts";
export const updateNuts = "nuts/updateInNuts";

export async function loadToNuts(dispatch, getState) {
  try {
    dispatch(loadToNutsPending());
    const resp = await axios.get("http://localhost:8085/collections/nut");
    dispatch(loadToNutsFullfilled(resp.data));
  } catch (err) {
    dispatch(loadToNutsRejected(err));
  }
}

export function loadToNutsFullfilled(value) {
  return {
    type: loadNutsFullfilled,
    payload: value,
  };
}
export function loadToNutsPending() {
  return {
    type: loadNutsPending,
  };
}
export function loadToNutsRejected(error) {
  return {
    type: loadNutsRejected,
    payload: error,
  };
}
export function addToNuts(value) {
  return {
    type: addNuts,
    payload: value,
  };
}
export function deleteFromNuts(value) {
  return {
    type: deleteNuts,
    payload: value,
  };
}
export function updateInNuts(value) {
  return {
    type: updateNuts,
    payload: value,
  };
}
