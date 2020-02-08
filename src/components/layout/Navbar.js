import React from 'react';

const Navbar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Nombre</span></p>
            <nav className="nav-principal">
                <a href="#!">Nothing</a>
            </nav>
        </header>
    );
}
 
export default Navbar;