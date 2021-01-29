import * as Type from "../actions/types";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case Type.FETCH_TODO:
      return action.payload;
    case Type.FETCH_TODO_LOADING:
      return action.payload;
    case Type.FETCH_TODO_FAIL:
      return action.payload.error;
    default:
      return state;
  }
};

export default todoReducer;
