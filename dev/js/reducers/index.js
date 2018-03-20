import {combineReducers} from 'redux';
import ActiveUserReducer from './reducer-active-user';


const allReducers = combineReducers({
    activeUser: ActiveUserReducer
});

export default allReducers
