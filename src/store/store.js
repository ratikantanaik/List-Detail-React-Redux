import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import empReducer from './reducers/employeeReducer';
import companyReducer from './reducers/companyReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    employeeList: empReducer,
    company: companyReducer,
    user: userReducer
});

const allStoreEnhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && 
    window.devToolsExtension(),
    
);

const store = createStore(
    allReducers, 
    allStoreEnhancer);

export default store;