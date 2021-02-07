import axios from 'axios';
import * as Types from '../actions/types';

export const login = user => dispatch => {
    axios.post('http://127.0.0.1:8000/api/login/', user)
        .then((res) => {
            console.log(res)
            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: res.data
                }
            })
        })
        .catch((error) =>{
            console.log(error);
        })
}
