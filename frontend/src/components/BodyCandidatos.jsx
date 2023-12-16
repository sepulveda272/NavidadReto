import React, { useState } from 'react'
import { CardCandidatos } from './CardCandidatos'


export const BodyCandidatos = () => {



  // Extraer información del localStorage
  const storedUser = localStorage.getItem('user');
  const localUser = storedUser ? JSON.parse(storedUser) : null;
  console.log(localUser);

  const showHola = localUser && localUser.rol === '65794ef885858c0baa350e4a';
  console.log(showHola);


  return (
    <>
      <div className='bodyMain'>
        <div className='bodyMiniMain'>
          <h1>ESTE ES UN TITULO</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ad! Ipsam cum dolor suscipit tempore aliquam praesentium eum asperiores nostrum minus voluptate voluptatibus sunt earum, laborum quis mollitia assumenda maxime?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam unde nobis amet quasi sapiente. Impedit nostrum doloribus rem! Mollitia porro beatae ex sed repudiandae unde, autem eos consequuntur consequatur iste.</p>
        </div>
      </div>
      <h2 className='bodyH2'>Potencia tu equipo con nuestros mejores talentos</h2>

      <div className='bodySearchers'>
        <select className='searcher' id="especialidades">
          <option value="">Especialidades</option>
          <option value="frontend">Desarrollo Frontend</option>
          <option value="backend">Desarrollo Backend</option>
          <option value="fullstack">Desarrollo Fullstack</option>
          <option value="devops">DevOps</option>
          <option value="security">Seguridad Informática</option>
        </select>

        <select className='searcher' id="pais">
          <option value="">País</option>
          <option value="usa">Estados Unidos</option>
          <option value="canada">Canadá</option>
          <option value="uk">Reino Unido</option>
          <option value="france">Francia</option>
          <option value="germany">Alemania</option>
        </select>

     {/*    <select className='searcher' id="opcion1">
          <option value="">Selecciona Opción 1</option>
          <option value="valor1">Opción 1</option>
          <option value="valor2">Opción 2</option>
        </select> */}

        <select className='searcher' id="nivelIngles">
          <option value="">Nivel de Inglés</option>
          <option value="basico">Básico</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
          <option value="fluido">Fluido</option>
          <option value="nativo">Nativo</option>
        </select>

        <select className='searcher' id="lenguajeProgramacion">
          <option value="">Lenguaje de Programación</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
        </select>

        <input type="text" placeholder='  Ingrese su busqueda' style={{borderRadius: "10px"}}/>
      </div>

      <div >
        {/* {showHola && <div className='boton-post'>
          <button className='boton-open' onClick={openModal}>Abrir Formulario</button>
        </div>} */}

        <div className='boton-post'>
          <button className='boton-open' ><a href="http://localhost:3000/registrocandidatos">Abrir Formulario</a></button>
        </div>
        
      
        
        
      </div>


      <CardCandidatos />

    </>
  )
}
