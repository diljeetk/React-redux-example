import {actionTypes} from '../actions';

let initialState = {
    userDetails: [],
    loggedInUser:{},
    filmResults :[],
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;

        case actionTypes.loginDetailsSuccess : {
            return Object.assign({}, state, {userDetails: action.userDetails})
            break;
        }
        case actionTypes.persistLogindetails : {
            return Object.assign({}, state, {loggedInUser: action.loginDetails})
            break;
        }
        case actionTypes.filmResults : {
            return Object.assign({},state, {filmResults: action.filmSearchResults})
            break;
        }
        default: return state     
    }
}
