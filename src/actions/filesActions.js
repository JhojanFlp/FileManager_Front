// Types
import {
    ADD_FOLDER,
    ADD_FOLDER_SUCCESS,
    ADD_FOLDER_ERROR,
    FILES,
    FILES_SUCCESS,
    FILES_ERROR,
    ADD_FILE,
    ADD_FILE_SUCCESS,
    ADD_FILE_ERROR
} from '../types';

import clientAxios from '../config/axios';

// Load Files
export function getFiles(){
    return async (dispatch) => {
        dispatch( downloadFiles() );
        try {
            const f = await clientAxios.get('/files');
            dispatch( loadFilesSuccess(f.data) );
        } catch (error) {
            dispatch( loadFilesError(true) );
        }
    }
}

const downloadFiles = () => ({
    type: FILES
})

const loadFilesSuccess = files => ({
    type: FILES_SUCCESS,
    payload: files
})

const loadFilesError = state => ({
    type: FILES_ERROR,
    payload: state
})

// New Folder
export function newFolder(folder){
    return async (dispatch) => {
        dispatch( addFolder() );
        try {
            await clientAxios.post('/files', folder);
            dispatch( addFolderSuccess(folder) );
        } catch (error) {
            dispatch( addFolderError(true) );
        }
    }
}

const addFolder = () => ({
    type: ADD_FOLDER
})

const addFolderSuccess = folder => ({
    type: ADD_FOLDER_SUCCESS,
    payload: folder
})

const addFolderError = state => ({
    type: ADD_FOLDER_ERROR,
    payload: state
}) 

// New Foile
export function newFile(file){
    return async (dispatch) => {
        dispatch( addFile() );
        try {
            await clientAxios.post('/files', file);
            dispatch( addFileSuccess(file) );
        } catch (error) {
            dispatch( addFileError(true) );
        }
    }
}

const addFile = () => ({
    type: ADD_FILE
})

const addFileSuccess = file => ({
    type: ADD_FILE_SUCCESS,
    payload: file
})

const addFileError = state => ({
    type: ADD_FILE_ERROR,
    payload: state
}) 