import axios from 'axios';
import { GET_PERSONS, ADD_PERSON, DELETE_PERSON, PERSONS_LOADING } from '../actions/types';


export const getPersons = () => dispatch => {
    dispatch(setPersonsLoading());
    axios
        .get('/api/persons')
        .then(res => dispatch({
            type: GET_PERSONS,
            payload: res.data
        })
        );
};

export const addPerson = (person) => dispatch => {
    axios
        .post('/api/persons', person)
        .then(res => 
            dispatch({
                type: ADD_PERSON,
                payload: res.data
            })
        )
};

export const deletePerson = (id) => dispatch => {
    axios.delete(`/api/persons/${id}`).then(res =>
        dispatch({
            type: DELETE_PERSON,
            payload: id
        })) 
};

export const setPersonsLoading = () => {
    return {
    type: PERSONS_LOADING
    };
};  
