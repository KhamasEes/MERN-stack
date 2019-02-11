

import { GET_PERSONS, ADD_PERSON, DELETE_PERSON, PERSONS_LOADING } from '../actions/types';

const initialState = {
    listPersons: [],
    loading: false
};


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PERSONS:
             return {
                ...state,
                listPersons: action.payload,
                loading: false 
            };

        case DELETE_PERSON:
            return {
                ...state,
                listPersons: state.listPersons.filter(personToSave => personToSave._id !== action.payload)
            };
        case ADD_PERSON:
            return {
                ...state,
                listPersons: [action.payload, ...state.listPersons]
            };
        case PERSONS_LOADING:
            return {
                ...state,
                loading: true
            }
        

        default:
        return state;
    }
}