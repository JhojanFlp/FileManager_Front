import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Alert, Label } from 'reactstrap';

// Redux

import Edit from '../operations/Edit';
import Permissions from '../operations/Permissions';
import deleteFilePost from '../../services/deleteFilePost';
import {refreshPage} from '../../helpers/refreshPage';

const Element = ({element}) => {

    // State store
    const error = useSelector( state => state.files.error );

    const openFolder = () => {
        // TODO: Load files (list) se ingrese el path para acceder por el endpoint
    }

    const deleteFile = name => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "Esta acción no podrá ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimnar!'
          }).then(() => {
            deleteFilePost({
                name
            })
            refreshPage();
          })
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3">
            <div className="card">
                {element.type === "folder"
                    ? <button
                        type="button"
                        className="btn"
                        onClick={openFolder}
                    ><img src="https://img.icons8.com/cute-clipart/150/000000/folder-invoices.png" alt={element.type} className="card-img-top"/></button>
                    : <img src="https://img.icons8.com/carbon-copy/150/000000/file.png" alt={element.type} className="card-img-top"/>
                }
                <div className="card-body text-center">

                    <div className="row">
                        <div className="col">
                            <h3>{element.name}</h3>
                        </div>
                        <div className="col">
                            <Permissions
                            element={element}
                        />
                        </div>      
                    </div>
                    
                    <Button color="danger" block onClick={() => deleteFile(element.name)}>Eliminar</Button>{' '}
                    <Edit 
                        element={element}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Element