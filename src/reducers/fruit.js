import {
  addFruitsFullfilled,
  addFruitsPending,
  addFruitsRejected,
  deleteFruits,
  loadFruitsFullfiled,
  loadFruitsPending,
  loadFruitsRejected,
  updateFruits,
} from "../actions/fruit";

const initialState = {
  items: [],
  pending: false,
  error: null,
};

export const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadFruitsFullfiled:
      return { items: [...action.payload], pending: false, error: null };

    case loadFruitsPending:
      return { items: [...state.items], pending: true, error: null };

    case loadFruitsRejected:
      return { items: [...state.items], error: action.payload, pending: false };

    case addFruitsFullfilled:
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      };
    case addFruitsPending:
      return {
        ...state,
        pending: true,
      };
    case addFruitsRejected:
      return {
        ...state,
        error: action.payload,
      };

    case deleteFruits:
      return state.items.filter((fruit) => {
        return fruit._id !== action.payload;
      });

    case updateFruits:
      const index = state.items.findIndex((fruit) => {
        return fruit._id === action.payload.id;
      });
      let newFruits = [...state.items];
      newFruits.splice(index, 1, action.payload);
      return newFruits;

    default:
      return { ...state };
  }
};
