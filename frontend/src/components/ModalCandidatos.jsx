import React, { useEffect } from 'react';
import avatar from '../assets/img/3523424-02-300x300.png'
import '../assets/css/modal.css'


export const ModalCandidatos = () => {

  useEffect(() => {
    const modal = document.getElementById('main-modal');
    const abrirModal = document.querySelector('.abrir-modal');
    const cerrarModal = document.querySelector('.cerrar-modal');

    abrirModal.addEventListener('click', () => {
      modal.showModal();
    });

    cerrarModal.addEventListener('click', () => {
      modal.close();
    });

    // Limpia los event listeners al desmontar el componente
    return () => {
      abrirModal.removeEventListener('click', () => {
        modal.showModal();
      });
      cerrarModal.removeEventListener('click', () => {
        modal.close();
      });
    };
  }, []); 


  return (
    <div className='hola'>
      <dialog className='contenedor-modal' id='main-modal'>
        <div className='contenedor-boton-cerrar '>
        <button className='cerrar-modal'>X</button>
        </div>
        <div className='titulo-modal'>
            <h1>DA04</h1>
            <h3>FullStack Developer</h3>

          </div>
        
        <div className='contenido-modal'>
          

          <div className='carta-presentacion'>
              <div className='contenedor-imagen-modal'>
                <img src={avatar} alt="" />
              </div>
              <div className='items-candidato-modal'>
                  <ul>
                    <li><strong>Seniority: </strong> Ssr+ </li>
                    <hr />
                    <li><strong>Especialidad: </strong> Desarrollo</li>
                    <hr />
                    <li><strong>Tecnologías: </strong> Angular, AWS, Docker, Express, Git Hub, MongoDB, MySQL, NestJS, React</li>
                    <hr />
                    <li><strong>Ubicación: </strong> Concepción del Uruguay, Argentina</li>
                    <hr />
                    <li><strong>Pretensión Salarial: </strong> 2500 USD</li>
                    <hr />
                    <li>Inglés Intermedio - Avanzado</li>


                  </ul>
              </div>
          </div>

          <div className='biografia-modal'>
            <h1>BIO</h1>
            <p>DA04 es un estudiante avanzado de Ingeniería en Sistemas con 4 años de experiencia en la industria del software. Actualmente se desempeña como Software Engineer, especializándose como Fullstack Developer. Sus core skills incluyen ReactJS, Angular, NextJS, ExpressJS y NestJS. Además, tiene experiencia en desarrollo móvil con Ionic y Expo, así como en pruebas con Cypress, Selenium y Appium. También cuenta con experiencia y conocimientos en entornos cloud como AWS, Oracle Cloud y GCP, y en bases de datos como PostgreSQL, MySQL y MongoDB.

            Está en busca de nuevas oportunidades que le brinden mayores desafíos y responsabilidades, así como la posibilidad de trabajar con clientes en inglés. A nivel interpersonal, se destaca por ser empático, comunicativo y atento.

            Su nivel de inglés es intermedio/avanzado, B2+.</p>
          </div>

          <div className='stack-developer'>
            <ul>
              <li>Stack</li>
              <li>Stack</li>
              <li>Stack</li>
              <li>Stack</li>
              <li>Stack</li>
              <li>Stack</li>
              <li>Stack</li>
              <li>Stack</li>
              <li>Stack</li>
            </ul>
          </div>

          <div className='formulario-modal'>
              <h2>Solicitar informacion de Contacto</h2>
              <div className='contenido-form-modal'>

                <form action="">
                  <div className='p1'>
                    <label htmlFor="">Hola</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Hola</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Hola</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Hola</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Hola</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Hola</label>
                    <input type="text" />
                  </div>
                  <button type='submit'>Enviar Registro</button>
                </form>

              </div>
          </div>
        </div>
        
      </dialog>
    </div>
  )
}

