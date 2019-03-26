import { combineReducers } from 'redux';
import listaesineReducer from './listaesineReducer';
import listpersonReducer from './listpersonReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';



export default combineReducers({
    listperson: listpersonReducer,
    listaesine: listaesineReducer,
    error: errorReducer,
    auth: authReducer
});
