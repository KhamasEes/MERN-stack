import { combineReducers } from 'redux';
import listaesineReducer from './listaesineReducer';
import listpersonReducer from './listpersonReducer';


export default combineReducers({
    listperson: listpersonReducer,
    listaesine: listaesineReducer,


});
