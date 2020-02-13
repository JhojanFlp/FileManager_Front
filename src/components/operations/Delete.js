import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input , Alert } from 'reactstrap';
import Swal from 'sweetalert2';

// Redux
import { deleteElement } from '../../actions/filesActions';

const Delete = () => {

    // State modal
    const [ modal, setModal ] = useState(false);
    const toggle = () => setModal(!modal);

    // State component
    const [ name, setName ] = useState("");

    const dispatch = useDispatch();
    const del= element => dispatch( deleteElement(element) );

    // State store
    const files = useSelector( state => state.files.files);
    const error = useSelector( state => state.files.error );

    const deleteFile = e => {
        let sw = false;
        let swFile = false;
        let f;
        e.preventDefault();
        if(name.trim() === ''){
            sw = true;
        }
        files.forEach(file => {
            if(file.name === name.trim()){
                swFile = true;
                f = file;
            }
        });
        if(sw || !swFile){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese un nombre válido!'
            })
            return;
        }
        console.log(f)
        del({
            f
        });
        toggle();
    }

    return (
        <Fragment>
            <Button color="danger" size="lg" block onClick={toggle}>Eliminar</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Eliminar</ModalHeader>
                <ModalBody>
                    <Form
                        onSubmit={deleteFile}
                    >
                        <FormGroup>
                            <Input 
                                name="file"
                                id="newFile" 
                                placeholder="Nombre de la carpeta o archivo"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </FormGroup>
                        <div className="row justify-content-center"> 
                            <Button color="success" size="lg">Eliminar</Button>
                        </div>
                    </Form>
                    { error ? <Alert color="danger" className="mt-3 text-center">Error</Alert> : null}
                </ModalBody>
            </Modal>
        </Fragment>
    );
}
 
export default Delete;