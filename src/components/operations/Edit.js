import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Alert, Label, Table } from 'reactstrap';
import Swal from 'sweetalert2';

// Redux
import { edit, getFiles } from '../../actions/filesActions';

const Edit = ({element}) => {

    const { id, name, permissions, owner } = element;
    let history = useHistory();

    // State store
    const error = useSelector( state => state.files.error );
    const files = useSelector( state => state.files.files);

    //Values checkbox
    let permisos = {
        ur: false, uw: false, ue: false, gr: false, gw: false, ge: false, or: false, ow: false, oe: false,
    }

    var p = element.permissions;
    var pUser = p.substring(0, 3);
    var pGroup = p.substring(3, 6);
    var pOthers = p.substring(6, 9);

    for (let i = 0; i < 3; i++) {
        const l = pUser.charAt(i);
        if(l !== '-' && i === 0){
            permisos['ur'] = true;
        } else if (l !== '-' && i === 1){
            permisos['uw'] = true;
        } else if(l !== '-' && i === 2){
            permisos['ue'] = true;
        }
    }

    for (let i = 0; i < 3; i++) {
        const l = pGroup.charAt(i);
        if(l !== '-' && i === 0){
            permisos['gr'] = true;
        } else if (l !== '-' && i === 1){
            permisos['gw'] = true;
        } else if(l !== '-' && i === 2){
            permisos['ge'] = true;
        }
    }

    for (let i = 0; i < 3; i++) {
        const l = pOthers.charAt(i);
        if(l !== '-' && i === 0){
            permisos['or'] = true;
        } else if (l !== '-' && i === 1){
            permisos['ow'] = true;
        } else if(l !== '-' && i === 2){
            permisos['oe'] = true;
        }
    }

    Object.assign(element, permisos);

    // State

    const [ modal, setModal ] = useState(false);
    const toggleEdit = () => setModal(!modal);

    const [ file, setFile ] = useState(element);
    const onChangeForm = e => {
        
        setFile({
            ...file,
            [e.target.name] : e.target.value
        })
        console.log(file)
    }

    const onChangeCheck = e => {
        let val;
        if(e.target.name === 'ur'){
            val = !file.ur
        } else if(e.target.name === 'uw'){
            val = !file.uw
        }else if(e.target.name === 'ue'){
            val = !file.ue
        } else if(e.target.name === 'gr'){
            val = !file.gr
        }else if(e.target.name === 'gw'){
            val = !file.gw
        }else if(e.target.name === 'ge'){
            val = !file.ge
        }else if(e.target.name === 'or'){
            val = !file.or
        }else if(e.target.name === 'ow'){
            val = !file.ow
        }else{
            val = !file.oe
        }

        setFile({
            ...file,
            [e.target.name] : val
        })
    }
    
    const dispatch = useDispatch();
    const editElement = file => dispatch( edit(file) );

    const editFile = e => {
        e.preventDefault();

        // Validations
        let sw = false;
        e.preventDefault();
        if(file.name.trim() === '' || file.owner.trim() === ''){
            sw = true;
        }
        files.forEach(f => {
            if((f.name.toUpperCase() === file.name.trim().toUpperCase() ) && (f.type === file.type.trim()) && (f.id !== file.id)){
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

        // Permissions parse
        var permissions = '';
        if(file.ur){
            permissions += 'r'
        } else{
            permissions += '-'
        }

        if(file.uw){
            permissions += 'w'
        } else{
            permissions += '-'
        }

        if(file.ue){
            permissions += 'x'
        } else{
            permissions += '-'
        }

        if(file.gr){
            permissions += 'r'
        } else{
            permissions += '-'
        }

        if(file.gw){
            permissions += 'w'
        } else{
            permissions += '-'
        }

        if(file.ge){
            permissions += 'x'
        } else{
            permissions += '-'
        }
        if(file.or){
            permissions += 'r'
        } else{
            permissions += '-'
        }

        if(file.ow){
            permissions += 'w'
        } else{
            permissions += '-'
        }

        if(file.oe){
            permissions += 'x'
        } else{
            permissions += '-'
        }

        delete file.ur;
        delete file.uw;
        delete file.ue;
        delete file.gr;
        delete file.gw;
        delete file.ge;
        delete file.or;
        delete file.ow;
        delete file.oe;

        file.permissions = permissions;
       
        editElement(file);
        toggleEdit();
        history.push('/');
    }

    return (
        <Fragment>
           <Button color="secondary" block onClick={toggleEdit}>Editar</Button>
            <Modal isOpen={modal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>Editar propiedades</ModalHeader>
                <ModalBody>
                    <Form
                        onSubmit={editFile}
                    >
                        <FormGroup>
                            <Label for="name">Nombre: </Label>
                            <Input 
                                name="name"
                                id="name" 
                                className="mb-3"
                                placeholder={name}
                                onChange={onChangeForm}
                            />
                            <Label for="permissions">Permisos: </Label>
                            <Input 
                                name="permissions"
                                id="permissions" 
                                className="mb-3"
                                placeholder={permissions}
                                onChange={onChangeForm}
                            />
                            <Table bordered id="cssTable">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th>Usuario</th>
                                        <th>Grupo</th>
                                        <th>Otros</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Lectura</th>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="ur" defaultChecked={file.ur} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="gr" defaultChecked={file.gr} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="or" defaultChecked={file.or} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Escritura</th>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="uw" defaultChecked={file.uw} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="gw" defaultChecked={file.gw} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="ow" defaultChecked={file.ow} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ejecución</th>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="ue" defaultChecked={file.ue} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="ge" defaultChecked={file.ge} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                        <td>
                                            <FormGroup check>
                                                <Input type="checkbox" name="oe" defaultChecked={file.oe} onChange={onChangeCheck}/>{' '}
                                            </FormGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Label for="owner">Propietario: </Label>
                            <Input 
                                name="owner"
                                id="owner" 
                                className="mb-3"
                                placeholder={owner}
                                onChange={onChangeForm}
                            />
                        </FormGroup>
                        <div className="row justify-content-center"> 
                            <Button color="success" size="lg">Editar información</Button>
                        </div>
                    </Form>
                    { error ? <Alert color="danger" className="mt-3 text-center">Error</Alert> : null}
                </ModalBody>
            </Modal>
        </Fragment>
    );
}
 
export default Edit;