import {
  loadNutsFullfilled,
  loadNutsPending,
  loadNutsRejected,
} from "../actions/nut";

const initialState = {
  items: [],
  pending: false,
  error: null,
};
export const nutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadNutsFullfilled:
      return {
        items: [...action.payload],
        pending: false,
        error: null,
      };

    case loadNutsPending:
      return {
        items: [...state.items],
        pending: true,
        error: null,
      };
    case loadNutsRejected:
      return {
        items: [...state.items],
        pending: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
