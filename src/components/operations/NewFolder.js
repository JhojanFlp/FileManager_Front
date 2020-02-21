import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input , Alert } from 'reactstrap';
import Swal from 'sweetalert2';

import addFolderPost from '../../services/addFolderPost';
import {refreshPage} from '../../helpers/refreshPage';

const NewFolder = () => {

    // State modal
    const [ modal, setModal ] = useState(false);
    const toggle = () => setModal(!modal);

    // State component
    const [ name, setName ] = useState("");

    const dispatch = useDispatch();
    // const addFolder = folder => dispatch( newFolder(folder) );

    // State store
    const files = useSelector( state => state.files.files);
    const path = useSelector( state => state.files.path );
    const error = useSelector( state => state.files.error );

    const submitNewFolder = e => {
        let sw = false;
        e.preventDefault();
        if(name.trim() === ''){
            sw = true;
        }
        files.forEach(file => {
            if((file.name.toUpperCase()  === name.trim().toUpperCase() ) && file.type === "Folder"){
                sw = true;
            }
        });
        if(sw){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese un nombre válido o no existente!'
            })
            return;
        }
        addFolderPost({
            name,
            type : "Folder"
        })
        toggle();
    }

    return (
        <Fragment>
            <Button color="success" size="lg" block onClick={toggle}>Nueva Carpeta</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Nueva carpeta</ModalHeader>
                <ModalBody>
                    <Form
                        onSubmit={submitNewFolder}
                    >
                        <FormGroup>
                            <Input 
                                name="folder"
                                id="newFolder" 
                                placeholder="Universidad, Tareas, ..."
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </FormGroup>
                        <div className="row justify-content-center"> 
                            <Button color="success" size="lg">Agregar</Button>
                        </div>
                    </Form>
                    { error ? <Alert color="danger" className="mt-3 text-center">Error</Alert> : null}
                </ModalBody>
            </Modal>
        </Fragment>
    );
}
 
export default NewFolder;