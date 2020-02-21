import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Element from './Element';
import filesGet from '../../services/filesGet';


const List = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [files, setFiles] = useState([]);
    
    const path = useSelector( state => state.files.path );

    useEffect(() => {
        filesGet().then(file => {
            setFiles(file)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <h2>{path}</h2>
                    <div className="col-12 p-3 row">
                        {files.length === 0
                            ? (<li className="element"><p>Esta carpeta está vacía.</p></li>) 
                            : files.map(e => (
                                <Element 
                                    element={e}
                                    key={e.name}
                                />
                                )) 
                        }
                    </div>
                </>
            )}
        </>
    );
}
 
export default List;