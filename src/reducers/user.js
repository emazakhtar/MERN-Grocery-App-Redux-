import {
  addWishlistFullfilled,
  addWishlistPending,
  addWishlistRejected,
  deleteWishlistFullfilled,
  deleteWishlistPending,
  deleteWishlistRejected,
  emptyUser,
  loadUserFullfilled,
  loadUserPending,
  loadUserRejected,
  loadWishlistFullfilled,
  loadWishlistPending,
  loadWishlistRejected,
} from "../actions/user";

const initialState = {
  userInfo: {},
  pending: false,
  error: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadUserFullfilled:
      return {
        userInfo: { ...action.payload },
        pending: false,
        error: null,
      };
    case loadUserPending:
      return {
        userInfo: { ...state.userInfo },
        pending: true,
        error: null,
      };
    case loadUserRejected:
      return {
        userInfo: { ...state.userInfo },
        pending: false,
        error: action.payload,
      };

    case emptyUser:
      return {
        userInfo: {},
        pending: false,
        error: null,
      };

    case loadWishlistFullfilled:
      return {
        userInfo: { ...state.userInfo, userWishlist: [...action.payload] },
        pending: false,
        error: null,
      };
    case loadWishlistPending:
      return {
        userInfo: { ...state.userInfo, userWishlist: [...action.payload] },
        pending: true,
        error: null,
      };
    case loadWishlistRejected:
      return {
        userInfo: { ...state.userInfo, userWishlist: [...action.payload] },
        pending: false,
        error: action.payload,
      };

    case addWishlistFullfilled:
      return {
        userInfo: {
          ...state.userInfo,
          userWishlist: [...state.userInfo.userWishlist, { ...action.payload }],
        },
        pending: false,
        error: null,
      };
    case addWishlistPending:
      return {
        userInfo: { ...state.userInfo },
        pending: true,
        error: null,
      };
    case addWishlistRejected:
      return {
        userInfo: { ...state.userInfo },
        pending: false,
        error: action.payload,
      };

    case deleteWishlistFullfilled:
      const newWishlist = state.userInfo.userWishlist.filter((u) => {
        return u._id !== action.payload._id;
      });
      return {
        userInfo: { ...state.userInfo, userWishlist: [...newWishlist] },
        pending: false,
        error: null,
      };
    case deleteWishlistRejected:
      return {
        userInfo: { ...state.userInfo },
        pending: false,
        error: action.payload,
      };
    case deleteWishlistPending:
      return {
        userInfo: { ...state.userInfo },
        pending: true,
        error: null,
      };

    default:
      return { ...state };
  }
};
