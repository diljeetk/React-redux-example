
export const actionTypes = {
    loginDetailsSuccess : 'FETCH_LOGIN_DETAILS',
    persistLogindetails: 'PERSIST_LOGIN_DETAILS',
    filmResults : 'FILM_SEARCH_RESULTS',
}

export const  fetchLoginDetails = userDetails => {
    return userDetailsObj(userDetails)
}

export const persistLogindetails = loginDetails => {
    return {
        type : actionTypes.persistLogindetails,
        loginDetails,
    }
}

export const persistFilmSearchResults = filmSearchResults => {
    return {
        type : actionTypes.filmResults,
        filmSearchResults,
    }
}

const userDetailsObj = userDetails =>{
    return {
        type : actionTypes.loginDetailsSuccess,
        userDetails,
    }
}
