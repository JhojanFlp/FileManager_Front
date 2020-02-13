import React from 'react';

import NewFolder from '../operations/NewFolder';
import NewFile from '../operations/NewFile';

const Operations = () => {

    return (
        <div className="justify-contente-center">
            
            <NewFolder />
            <NewFile />
            {/* <button
                type="button"
                className="btn btn-secondary btn-lg btn-block"
            >Renombrar</button>   */}
            {/* <Delete />   */}

            

            <button
                type="button"
                className="btn btn-info btn-lg btn-block"
            >Copiar / Pegar</button>  

            <button
                type="button"
                className="btn btn-info btn-lg btn-block"
            >Cortar / Mover</button>  

            {/* <button
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
            >Cambiar propietario</button>           */}
        </div>
    );
}
 
export default Operations;