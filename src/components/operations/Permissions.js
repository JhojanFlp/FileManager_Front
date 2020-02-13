import React, { Fragment, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Label } from 'reactstrap';

const Permissions = ({element}) => {

    // State modal
    const [ modal, setModal ] = useState(false);
    const toggle = () => setModal(!modal);

    // Permissions
    var p = element.permissions;
    var pUser = p.substring(0, 3);
    var pGroup = p.substring(3, 6);
    var pOthers = p.substring(6, 9);

    var user = [];
    var group = [];
    var others = [];

    for (let i = 0; i < 3; i++) {
        const l = pUser.charAt(i);
        if(l !== '-'){
            if(l === 'r'){
                user.push('Lectura');
            } else if(l === 'w'){
                user.push('Escritura');
            } else{
                user.push('Ejecución');
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        const l = pGroup.charAt(i);
        if(l !== '-'){
            if(l === 'r'){
                group.push('Lectura');
            } else if(l === 'w'){
                group.push('Escritura');
            } else{
                group.push('Ejecución');
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        const l = pOthers.charAt(i);
        if(l !== '-'){
            if(l === 'r'){
                others.push('Lectura');
            } else if(l === 'w'){
                others.push('Escritura');
            } else{
                others.push('Ejecución');
            }
        }
    }
    
    var perU = '';
    var perG = '';
    var perO = '';

    if(user.length === 0){
        perU = 'No tiene persmisos asignados.'
    } else{
        for (let i = 0; i < user.length; i++) {
            if(i === user.length - 1){
                perU += user[i]
            } else {
                perU += user[i] + ' - '
            }
        }
    }

    if(group.length === 0){
        perG = 'No tiene persmisos asignados.';
    } else{
        for (let i = 0; i < group.length; i++) {
            if(i === group.length - 1){
                perG += group[i]
            } else {
                perG += group[i] + ' - '
            }
        }
    }

    if(others.length === 0){
        perO = 'No tiene persmisos asignados.';
    } else{
        for (let i = 0; i < others.length; i++) {
            if(i === others.length - 1){
                perO += others[i]
            } else {
                perO += others[i] + ' - '
            }
        }
    }

    return (
        <Fragment>
            <i className="fas fa-eye" onClick={toggle}></i>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Permisos de <strong>{element.name}</strong></ModalHeader>
                <ModalBody>
                    <Label className="ml-3"><strong>→ Usuario:</strong> {perU}</Label><br></br>
                    <Label className="ml-3"><strong>→ Grupo:</strong> {perG}</Label><br></br>
                    <Label className="ml-3"><strong>→ Otros:</strong> {perO}</Label><br></br>
                </ModalBody>
            </Modal>
        </Fragment>
    );
}
 
export default Permissions;