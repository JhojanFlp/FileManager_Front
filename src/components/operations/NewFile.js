import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input , Alert } from 'reactstrap';
import Swal from 'sweetalert2';

// Redux
import { newFile } from '../../actions/filesActions';

const NewFile = () => {

    // State modal
    const [ modal, setModal ] = useState(false);
    const toggle = () => setModal(!modal);

    // State component
    const [ name, setName ] = useState("");

    const dispatch = useDispatch();
    const addFile = folder => dispatch( newFile(folder) );

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
            if((file.name === name.trim()) && file.type === "File"){
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
        addFile({
            name,
            type : "File",
            permissions: "rwx-rwx-rwx",
            owner: "Soy yo",
            path: path
        });
        toggle();
    }

    return (
        <Fragment>
            <Button color="success" size="lg" block onClick={toggle}>Nueva Archivo</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Nueva archivo</ModalHeader>
                <ModalBody>
                    <Form
                        onSubmit={submitNewFolder}
                    >
                        <FormGroup>
                            <Input 
                                name="file"
                                id="newFile" 
                                placeholder="doc, doc.txt, ..."
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
 
export default NewFile;