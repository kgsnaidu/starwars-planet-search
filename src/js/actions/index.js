import { LOGIN_SUCCESS, LOGIN_ERROR, SEARCH_RESULTS, SEARCH_NO_RESULTS } from './actionTypes';
import { LoginService, PlanetSearchService } from '../services';

export const doLogin = (username, password) => dispatch => {
    LoginService(username, password).then(data => {
        const { count = 0, results } = data;

        if (count === 1) {
             
            const { name, birth_year } = results[0];

            if (name.toLowerCase() === username.toLowerCase() && password === birth_year) {

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: results[0]
                });
            }
        }

        dispatch({ type: LOGIN_ERROR, msg: 'Invalid Credentails !' });
    });
}

export const doSearch = (searchString) => dispatch => {
    PlanetSearchService(searchString).then(data => {
        const { count = 0, results } = data;

        if (count) {
            dispatch({ type: SEARCH_RESULTS, payload: data });
        } else {
            dispatch({ type: SEARCH_NO_RESULTS, payload: {} });
        }
    });
}