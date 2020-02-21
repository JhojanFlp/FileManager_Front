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
    ADD_FILE_ERROR,
    DELETE,
    DELETE_SUCCESS,
    DELETE_ERROR,
    EDIT,
    EDIT_SUCCESS,
    EDIT_ERROR,
    SET_FILES
} from '../types';

import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

// Load Files
export function getFiles(){
    return async (dispatch) => {
        dispatch( downloadFiles() );
        try {
            const f = await clientAxios.get('/show');
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
            console.log(folder)
            await clientAxios.get('/create/Folder', folder);
            dispatch( addFolderSuccess(folder) );
            dispatch(getFiles());
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

// New File
export function newFile(file){
    return async (dispatch) => {
        dispatch( addFile() );
        try {
            await clientAxios.post('/files', file);
            dispatch( addFileSuccess(file) );
            dispatch(getFiles());
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

// Delete

export function deleteElement(id){
    return async (dispatch) => {
        dispatch( deleteFile() );
        try {
            await clientAxios.delete(`/files/${id}`);
            dispatch( deleteSuccess(id) );
            Swal.fire(
                'Eliminado!',
                'Tu archivo ha sido eliminado.',
                'success'
            )
        } catch (error) {
            dispatch( deleteError(true) );
        }
    }
}

const deleteFile = () => ({
    type: DELETE
})

const deleteSuccess = id => ({
    type: DELETE_SUCCESS,
    payload: id
})

const deleteError = state => ({
    type: DELETE_ERROR,
    payload: state
}) 

// Edit
export function edit(file){
    return async (dispatch) => {
        dispatch( editFile() );
        try {
            clientAxios.put(`/files/${file.id}`, file);
            dispatch( editSuccess(file) );
            Swal.fire(
                'Editado!',
                'Se ha editado correctamente.',
                'success'
            )
        } catch (error) {
            dispatch( editError(true));
        }
    }
}

const editFile = () => ({
    type: EDIT
})

const editSuccess = file => ({
    type: EDIT_SUCCESS,
    payload: file
})

const editError = state => ({
    type: EDIT_ERROR,
    payload: state
})

export const setFiles = files => ({
    type: SET_FILES,
    files
})