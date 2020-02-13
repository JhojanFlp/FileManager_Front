import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Alert, Label } from 'reactstrap';

// Redux
import { deleteElement } from '../../actions/filesActions';

import Edit from '../operations/Edit';
import Permissions from '../operations/Permissions';

const Element = ({element}) => {

    const { id } = element;

    // State store
    const error = useSelector( state => state.files.error );

    const openFolder = () => {
        // TODO: Load files (list) se ingrese el path para acceder por el endpoint
    }

    const dispatch = useDispatch();

    // Delete
    const del = id => dispatch( deleteElement(id) );

    const deleteFile = id => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "Esta acción no podrá ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimnar!'
          }).then((result) => {
            if (result.value) {
                del( id );
            }
          })
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3">
            <div className="card">
                {element.type === "Folder"
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
                    
                    <Button color="danger" block onClick={() => deleteFile(id)}>Eliminar</Button>{' '}
                    <Edit 
                        element={element}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Element;