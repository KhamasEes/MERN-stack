import axios from 'axios';
import { GET_ESINEET, ADD_ESINE, DELETE_ESINE, ESINEET_LATAUTUU } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getEsineet = () => dispatch => {
    dispatch(setEsineetLatautuu());
    axios
        .get('/api/items')
        .then(res => dispatch({
            type: GET_ESINEET,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addEsine = (esine) => (dispatch, getState) => {
    axios
        .post('/api/items', esine, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_ESINE,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteEsine = (id) => (dispatch, getState) => {
    axios.delete(`/api/items/${id}`, tokenConfig(getState)).then(res =>
        dispatch({
            type: DELETE_ESINE,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};



export const setEsineetLatautuu = () => {
    return {
    type: ESINEET_LATAUTUU
    };
};  