import React from 'react';
import Operations from './Operations';

const Sidebar = () => {
    return (
        <aside>
            <h1>File <span>Manager</span></h1>
            <div className="row justify-content-center">
                <h3>Acciones</h3>
            </div>
            <div className="container">
                <Operations />
            </div>
        </aside>
    );
}
 
export default Sidebar;