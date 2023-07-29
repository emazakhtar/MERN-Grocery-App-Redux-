import {
  loadVegetablesFullfilled,
  loadVegetablesPending,
  loadVegetablesRejected,
} from "../actions/vegetable";

const initialState = {
  items: [],
  pending: false,
  eror: null,
};
export const vegetablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadVegetablesFullfilled:
      return {
        items: [...action.payload],
        pending: false,
        error: null,
      };

    case loadVegetablesPending:
      return {
        items: [...state.items],
        pending: true,
        error: null,
      };
    case loadVegetablesRejected:
      return {
        items: [...state.items],
        pending: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
