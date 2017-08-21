import { combineReducers } from 'redux';
import login from './login';
import search from './search';

const Reducers = combineReducers({
    login,
    search
});

export default Reducers;