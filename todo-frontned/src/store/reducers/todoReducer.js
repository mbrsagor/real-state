import * as Type from "../actions/types";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case Type.FETCH_TODO:
      return action.payload.todos;
    case Type.CREATE_TODO:
      return {
        todos: [action.payload],
      };
    case Type.TODO_DETAIL:
      return {
        ...state,
        todo: action.payload,
      };
    case Type.UPDATE_TODO:
      return {
        ...state,
        todos: [action.payload],
      };
    case Type.DELETE_TODO:
      let todos = [];
      return {
        ...state,
        todos: [todos.filter(todo => todo.id !== action.payload)],
      };
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
