import axios from 'axios';
import * as Types from '../actions/types';
import {BASE_URL} from '../../config';

// user login
export const login = user => dispatch => {
    axios.post(`${BASE_URL}/login/`, user)
        .then((res) => {
            // console.log(res)
            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: res.data
                }
            })
        })
        .catch((error) =>{
            // console.log(error);
            dispatch({
                type: Types.USER_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
}

// User registration
export const registration = user => dispatch => {
    axios.post(`${BASE_URL}/register/`, user)
    .then((res) =>{
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
        dispatch({
            type: Types.USER_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })
}
