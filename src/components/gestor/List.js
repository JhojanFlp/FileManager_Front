import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFiles } from '../../actions/filesActions';

import Element from './Element';

const List = () => {

    // Data
    const files = useSelector( state => state.files.files );
    const path = useSelector( state => state.files.path );

    const dispatch = useDispatch();

    useEffect( () => {
        //Get files API
        const loadFiles = () => dispatch( getFiles() );
        loadFiles();
    }, [])

    return (
        <Fragment>
            <h2>{path}</h2>
            <div className="col-12 p-3 row">
                {files.length === 0
                    ? (<li className="element"><p>Esta carpeta está vacía.</p></li>) 
                    : files.map(e => (
                        <Element 
                            element={e}
                            key={e.id}
                        />
                      )) 
                }
            </div>
        </Fragment>
    );
}
 
export default List;