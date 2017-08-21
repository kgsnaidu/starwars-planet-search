import { SEARCH_RESULTS, SEARCH_NO_RESULTS } from '../actions/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case SEARCH_RESULTS:
            return action.payload;
        case SEARCH_NO_RESULTS:
            return action.payload;
    }
    return state;
}