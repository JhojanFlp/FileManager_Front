import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const Operations = () => {

    const [ modal, setModal ] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="justify-contente-center">

            {/* New Folder */}
            <Button color="success" size="lg" block onClick={toggle}>Nueva Carpeta</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Nueva carpeta</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input name="folder" id="newFolder" placeholder="Universidad, Tareas, ..." />
                        </FormGroup>
                        <div className="row justify-content-center"> 
                            <Button color="success" size="lg">Agregar</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>

            {/* New File */}
            <button
                type="button"
                className="btn btn-success btn-lg btn-block"
            >Nuevo archivo</button>  

            <button
                type="button"
                className="btn btn-secondary btn-lg btn-block"
            >Renombrar</button>  

            <button
                type="button"
                className="btn btn-danger btn-lg btn-block"
            >Eliminar</button>  

            <button
                type="button"
                className="btn btn-info btn-lg btn-block"
            >Copiar</button>  

            <button
                type="button"
                className="btn btn-info btn-lg btn-block"
            >Pegar</button> 

            <button
                type="button"
                className="btn btn-info btn-lg btn-block"
            >Mover</button>  

            <button
                type="button"
                className="btn btn-info btn-lg btn-block"
            >Cortar</button>  

            <button
                type="button"
                className="btn btn-warning btn-lg btn-block"
            >Ver permisos</button>  

            <button
                type="button"
                className="btn btn-warning btn-lg btn-block"
            >Cambiar permisos</button>  

            <button
                type="button"
                className="btn btn-warning btn-lg btn-block"
            >Cambiar propietario</button>          
        </div>
    );
}
 
export default Operations;