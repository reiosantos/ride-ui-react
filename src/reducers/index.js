import { combineReducers } from 'redux';
import authReducer from './auth';
import ridesReducer from './rides';

const reducers = combineReducers({
	authReducer,
	ridesReducer
});

export default reducers;
