import { combineReducers } from 'redux';
import { customersListReducer } from './customersList';
import { servicesListReducer } from './servicesList';

export const rootReducer = combineReducers({
    customersList: customersListReducer,
    servicesList: servicesListReducer
})