import React from 'react';

const Element = ({element}) => {

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3">
            <div className="card">
                {element.type === "Folder"
                    ? <button
                        type="button"
                        className="btn"
                    ><img src="https://img.icons8.com/cute-clipart/150/000000/folder-invoices.png" alt={element.type} className="card-img-top"/></button>
                    : <img src="https://img.icons8.com/carbon-copy/150/000000/file.png" alt={element.type} className="card-img-top"/>
                }
                <div className="card-body text-center">
                    <h4>{element.name}</h4>
                </div>
            </div>
        </div>
    );
}
 
export default Element;