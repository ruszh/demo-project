import { combineReducers } from 'redux';
import { customersListReducer } from './customersList';

export const rootReducer = combineReducers({
    customersList: customersListReducer
})