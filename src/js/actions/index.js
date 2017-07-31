import { LOGIN, LOGIN_ERROR } from './actionTypes';
import { LoginService } from './services';

export const login = ( username, password ) => {
    const { count = 0 , results } = LoginService( username, password );

    if( count === 1 ) {
        const { name, birth_year } = results[0];

        if(name.toLowerCase() === username.toLowerCase() && password === birth_year) {

            return {
                type: LOGIN_SUCCESS,
                payload: results[0]
            };
        }
    }

    return { type: LOGIN_ERROR, msg: 'Invalid Credentails !' };
}