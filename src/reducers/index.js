import { combineReducers } from 'redux';

// Reducers
import filesReducer from './filesReducer';

export default combineReducers({
    files: filesReducer
});
