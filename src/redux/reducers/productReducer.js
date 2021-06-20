import { ActionType } from "../constants/actionType.type";

//! this is a reducer
// ! reducer always take two argument: state and action

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: action.payload };

    case ActionType.SELECTED_PRODUCT:
      return state;

    default:
      return state;
  }
};
