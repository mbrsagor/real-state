import axios from "axios";
import * as Type from "./types";
import { returnErrors } from "./message";

// Todo fetch action
export const fetchTodo = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/todo/")
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: Type.FETCH_TODO,
        payload: {
          todos: res.data,
        },
      });
    })
    .catch((error) => {
      console.log(error.res);
      dispatch(returnErrors(error.res));
    });
};

// Todo create action
export const createTodo = (todo) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/todo/", todo)
    .then((res) => {
      //   console.log(res.data);
      dispatch({
        type: Type.CREATE_TODO,
        payload: {
          todos: res.data,
          success_message: "Todo has been successfully created.",
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: Type.GET_ERRORS,
        payload: {
          error: error.response.data,
        },
      });
    });
};

// Todo Detail action
export const todoDetail = (id) => (dispatch) => {
  axios
    .get(`http://127.0.0.1:8000/api/todo/${id}/`)
    .then((res) => {
      dispatch({
        type: Type.TODO_DETAIL,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch(returnErrors(error.res));
    });
};

// Todo update action
export const todoUpdate = (id, todo) => (dispatch) => {
  axios
    .put(`http://127.0.0.1:8000/api/todo/${id}/`, todo)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: Type.UPDATE_TODO,
        payload: {
          todos: res.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: Type.GET_ERRORS,
        payload: {
          error: error.response.data,
        },
      });
    });
};

// Delete todo action
export const deleteTodoList = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/todo/${id}/`)
    .then((res) => {
      dispatch({
        type: Type.DELETE_TODO,
        id: res.data.id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
