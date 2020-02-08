import React, { Fragment } from 'react';

import Element from './Element';

const List = () => {

    // Data
    const elements = [
        {name: "Tareas", type: "Folder"},
        {name: "Universidad", type: "Folder"},
        {name: "Notas.txt", type: "File"},
        {name: "Script.py", type: "File"}
    ];

    return (
        <Fragment>
            <h2>Carpeta actual</h2>
            <div className="col-12 p-5 row">
                {elements.length === 0
                    ? (<li className="element"><p>Esta carpeta está vacía.</p></li>) 
                    : elements.map(e => (
                        <Element 
                            element={e}
                        />
                      )) 
                }
            </div>
        </Fragment>
    );
}
 
export default List;