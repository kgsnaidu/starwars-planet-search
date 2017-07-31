import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload;
        case LOGIN_ERROR:
            return { error: action.msg };
    }
    return state;
}