// Types
import {
    ADD_FILE,
    ADD_FILE_SUCCESS,
    ADD_FILE_ERROR
} from '../types';

// initial state
const initialState = {
    files: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}