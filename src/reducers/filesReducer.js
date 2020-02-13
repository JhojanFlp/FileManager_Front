// Types
import {
    FILES,
    FILES_SUCCESS,
    FILES_ERROR,
    ADD_FOLDER,
    ADD_FOLDER_SUCCESS,
    ADD_FOLDER_ERROR,
    ADD_FILE,
    ADD_FILE_SUCCESS,
    ADD_FILE_ERROR,
    DELETE,
    DELETE_SUCCESS,
    DELETE_ERROR,
    EDIT,
    EDIT_SUCCESS,
    EDIT_ERROR
} from '../types';

// initial state
const initialState = {
    files: [],
    path: "/",
    error: null
}

export default function(state = initialState, action){
    switch(action.type){
        case EDIT:
        case DELETE:
        case ADD_FILE:
        case ADD_FOLDER:
        case FILES:
            return{
                ...state,
                error: null
            }
        case ADD_FILE_SUCCESS:
        case ADD_FOLDER_SUCCESS:
            return{
                ...state,
                files: [...state.files, action.payload],
                error: null
            }
        case EDIT_ERROR:
        case FILES_ERROR:
        case DELETE_ERROR:
        case ADD_FILE_ERROR:
        case ADD_FOLDER_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case FILES_SUCCESS:
            return{
                ...state,
                error: null,
                files: action.payload
            }
        case DELETE_SUCCESS:
            return{
                ...state,
                error: null,
                files: state.files.filter( file => action.payload !== file.id)
            }
        case EDIT_SUCCESS:
            return{
                ...state,
                error: null,
                files: state.files.map( file => file.id === action.payload.id ? file = action.payload : file
                )
            }
        default:
            return state;
    }
}