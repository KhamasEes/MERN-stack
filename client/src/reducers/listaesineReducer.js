

import { GET_ESINEET, ADD_ESINE, DELETE_ESINE, ESINEET_LATAUTUU } from '../actions/types';

const initialState = {
    listanEsineet: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ESINEET:
            return {
                ...state,
                listanEsineet: action.payload,
                loading: false 
            };

        case DELETE_ESINE:
            return {
                ...state,
                listanEsineet: state.listanEsineet.filter(sailytettavaEsine => sailytettavaEsine._id !== action.payload)
            };
        case ADD_ESINE:
            return {
                ...state,
                listanEsineet: [action.payload, ...state.listanEsineet]
            };
        case ESINEET_LATAUTUU:
            return {
                ...state,
                loading: true
            }
        

        default:
        return state;
    }
}