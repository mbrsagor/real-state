import * as Type from "../actions/types";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case Type.FETCH_TODO:
      return action.payload;
    case Type.CREATE_TODO:
      return {
        todos: [action.payload],
        // error: {}
      };
    case Type.DETAIL_TODO:
      return {
        ...state,
        todo: action.payload
      }
    case Type.GET_ERRORS:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default todoReducer;
