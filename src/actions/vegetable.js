import axios, * as others from "axios";

export const loadVegetablesFullfilled = "vegetables/loadToVegetablesFullfilled";
export const loadVegetablesPending = "vegetables/loadToVegetablesPending";
export const loadVegetablesRejected = "vegetables/loadToVegetablesRejected";

export const addVegetables = "vegetables/addToVegetables";
export const deleteVegetables = "vegetables/deleteFromVegetables";
export const updateVegetables = "vegetables/updateInVegetables";

export async function loadToVegetables(dispatch, getState) {
  try {
    dispatch(loadToVegetablesPending());
    const resp = await axios.get("http://localhost:8085/collections/vegetable");
    dispatch(loadToVegetablesFullfilled(resp.data));
  } catch (err) {
    dispatch(loadToVegetablesRejected(err));
  }
}
export function loadToVegetablesFullfilled(value) {
  return {
    type: loadVegetablesFullfilled,
    payload: value,
  };
}
export function loadToVegetablesPending() {
  return {
    type: loadVegetablesPending,
  };
}
export function loadToVegetablesRejected(error) {
  return {
    type: loadVegetablesRejected,
    payload: error,
  };
}
export function addToVegetables(value) {
  return {
    type: addVegetables,
    payload: value,
  };
}
export function deleteFromVegetables(value) {
  return {
    type: deleteVegetables,
    payload: value,
  };
}
export function updateInVegetables(value) {
  return {
    type: updateVegetables,
    payload: value,
  };
}
