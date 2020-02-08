import React from 'react';

const Element = ({element}) => {

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                {element.type === "Folder"
                    ? <img src="https://img.icons8.com/cute-clipart/64/000000/folder-invoices.png" alt={element.type} className="card-img-top"/>
                    : <img src="https://img.icons8.com/carbon-copy/100/000000/file.png" alt={element.type} className="card-img-top"/>
                }
                <div className="card-body text-center">
                    <h4>{element.name}</h4>
                </div>
                <div className="card-footer text-center">
                    <button
                        type="button"
                        className="btn btn-danger mx-1"
                    ><i className="fas fa-trash"></i></button>
                    <button
                        type="button"
                        className="btn btn-info mx-1"
                    ><i className="fas fa-pencil-alt"></i></button>
                    <button
                        type="button"
                        className="btn btn-primary mx-1"
                    ><i className="fas fa-arrows-alt"></i></button>
                    <button
                        type="button"
                        className="btn btn-secondary mx-1"
                    ><i className="fas fa-copy"></i></button>
                </div>
            </div>
        </div>
    );
}
 
export default Element;