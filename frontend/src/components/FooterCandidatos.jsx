import React from 'react'
import '../assets/css/styless.css'

export const FooterCandidatos = () => {

    return (
      <div className="footer-contenedor">
        <div className="footer-contenido">
          
              <table className="footer-tabla">
                <tr className='encabezados-tabla'>
                  <td><strong>Contacto</strong></td>
                  <td><strong>Empresa</strong></td>
                  <td><strong>Siguenos</strong></td>
                </tr>
                <tr>
                  <td className='columna-contacto'>
                    
                    <p>Colombia, Santander</p>
                    <br />
                    <p>+57 3155667890</p>
                    <br />
                    <p>campus@gmail.com</p>
                    <br />
                  </td>
                  <td className='columna-empresa'>
                    
                    <p>Campus</p>
                    <br />
                    <p>Instalaciones</p>
                    <br />
                  </td>
                  <td className='columna-siguenos'>
                    
                    <p>Facebook</p>
                    <br />
                    <p>Instagram</p>
                    <br />
                    <p>Tiktok</p>
                    <br />
                    <p>Linkenid</p>
                    <br />
                    <p>Twitter</p>
                    
                  </td>
                </tr>
              </table>
          
        </div>
      </div>
    );
  
}
