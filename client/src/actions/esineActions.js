import axios from 'axios';
import { GET_ESINEET, ADD_ESINE, DELETE_ESINE, ESINEET_LATAUTUU } from '../actions/types';

export const getEsineet = () => dispatch => {
    dispatch(setEsineetLatautuu());
    axios
        .get('/api/items')
        .then(res => dispatch({
            type: GET_ESINEET,
            payload: res.data
        })
        );
};

export const addEsine = (esine) => dispatch => {
    axios
        .post('/api/items', esine)
        .then(res => 
            dispatch({
                type: ADD_ESINE,
                payload: res.data
            })
        )
};

export const deleteEsine = (id) => dispatch => {
    axios.delete(`/api/items/${id}`).then(res =>
        dispatch({
            type: DELETE_ESINE,
            payload: id
        })) 
};



export const setEsineetLatautuu = () => {
    return {
    type: ESINEET_LATAUTUU
    };
};  