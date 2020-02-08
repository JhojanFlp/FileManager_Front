import React from 'react';

// Components
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import List from '../gestor/List';

const Gestor = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Navbar />
                <main>
                    <div className="contenedor">
                        <List />
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Gestor;