import React, { useState } from 'react';
import logo from '../assets/img/social.png';
import '../assets/css/styless.css';

export const NavbarCandidatos = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Extraer información del localStorage
  const storedUser = localStorage.getItem('user');
  const localUser = storedUser ? JSON.parse(storedUser) : null;
  console.log(localUser);

  const showHola = localUser && localUser.rol === '65794ef885858c0baa350e4a';
  console.log(showHola);

  const storedToken = localStorage.getItem('token');
  const localToken = storedToken ? JSON.parse(storedToken) : null;
  const showNoToken = !localToken; 

  const handleLogout = () => {
    // Elimina el token del localStorage
    localStorage.clear()
  
    // Elimina la cookie (puedes usar un método adecuado para tu aplicación)
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
    // Redirecciona al usuario al inicio (puedes ajustar la ruta según tu estructura de rutas)
    window.location.href = '/';
  };

  return (
    <div className='Navbar1'>
      <div className="navbar-inverse" role="navigation">
        <div className={`container ${menuOpen ? 'mobile-menu active' : ''}`}>
          <img src={logo} alt='no sirve' width="200px" />
          

          <div className={`links ${menuOpen ? 'mobile-menu active' : ''}`}>
            <a href="http://localhost:3000/"><i className="fas fa-home"></i> Home</a>
            { showHola && <a href="http://localhost:3000/solicitados">Solicitades</a>}
            { showHola && <a href="http://localhost:3000/usuarios">Usuarios</a>}
            { showNoToken && <a href="http://localhost:3000/login">Login</a>}
            { showNoToken && <a href="http://localhost:3000/register">Register</a>}
            { localToken && <button onClick={handleLogout}>Cerrar Sesión</button>}


          </div>

        
          <div className="hamburger-menu" onClick={handleMenuClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
