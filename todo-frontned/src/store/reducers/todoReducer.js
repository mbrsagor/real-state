import * as Type from "../actions/types";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case Type.FETCH_TODO:
      return action.payload
    case Type.CREATE_TODO:
      return {
        todos: [action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
