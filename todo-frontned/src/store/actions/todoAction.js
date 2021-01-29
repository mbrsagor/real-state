import axios from 'axios';
import * as Type from './types';


export const fetchTodo = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/todo/')
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Type.FETCH_TODO,
                payload: res.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
}