import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export const InsertCandidatos = () => {

    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [Especialidad,setEspecialidad] = useState('');
    const [NivelSeniority,setNivelSeniority] = useState('');
    const [Pais,setPais] = useState('');
    const [Departamento,setDepartamento] = useState('');
    const [Tecnologia,setTecnologia] = useState([]);
    const [salario,setSalario] = useState('');
    const [NivelIngles,setNivelIngles] = useState('');
    const [biografia,setBiografia] = useState('');
    const [Stack,setStack] = useState([]);
    const [setError] = useState('');

    const postData = (e) => {
        e.preventDefault();
      
        if (!nombre || !apellido || !Especialidad || !NivelSeniority || !Pais || !Departamento || !Tecnologia || !salario || !NivelIngles || !biografia || !Stack) {
          setError(alert("Por favor, complete todos los campos obligatorios."));
          return;
        }

        console.log("hola");

        const token = localStorage.getItem('token');
      
        axios.post("http://localhost:8003/candidatos/add", {
          nombre,
          apellido,
          Especialidad,
          NivelSeniority,
          Pais,
          Departamento,
          Tecnologia,
          salario,
          NivelIngles,
          biografia,
          Stack
        }, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            console.log("hola");
            swal({
              icon: "success",
              title: "Candidato creado",
              showConfirmButton: false,
              timer: 3000,
            });
            setTimeout(() => {
              window.location.href = "/";
            }, 3000);
            console.log(response);
          })
          .catch(function (error) {
            if (error.response) {
              swal({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: "error",
                confirmButtonText: "Close",
              });
            }
          });
      };
    
  return (
    <>
          <div className='contenedor-insert-candidato'>
        
                <div className='contenido-insert-candidato'>
                    <div class="wrapper">
                        <form class="form-signin">       
                            <h2 class="form-signin-heading">Ingresa tu Candidatos</h2>
                            <label htmlFor="">Nombre</label>
                            <input type="text" class="form-control" name="username" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                            <label htmlFor="">Apellido</label>
                            <input type="text" class="form-control" name="username" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                            <label htmlFor="">Especialidad </label>
                            <select name="" id="select-especialidad" value={Especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
                                <option value="value1">Seleccione Especialidad</option>
                                <option value="Backend">Backend</option>
                                <option value="Frontend">Frontend</option>
                                <option value="Full Stack">Fullstack</option>
                            </select>
                            <label htmlFor="">Nivel Seniority</label>
                            <select name="" id="select-nivel-seniority" value={NivelSeniority} onChange={(e) => setNivelSeniority(e.target.value)}>
                                <option value="value1">Seleccione Nivel Seniority</option>
                                <option value="Jr.">Jr.</option>
                                <option value="Jr.+">Jr.+</option>
                                <option value="Ssr.">Ssr.</option>
                                <option value="Sr.">Sr.</option>
                                <option value="Sr.+">Sr.+</option>
                            </select>
                            <label htmlFor="">Nivel Ingles</label>
                            <select name="" id="select-nivel-ingles" value={NivelIngles} onChange={(e) => setNivelIngles(e.target.value)}>
                                <option value="value1">Seleccione Nivel Ingles</option>
                                <option value="Basico">Ingles Basico</option>
                                <option value="Intermedio">Ingles Intermedio</option>
                                <option value="Intermedio - Avanzado">Ingles Intermedio - Avanzado</option>
                                <option value="Avanzado">Ingles Avanzado</option>
                            </select>
                            <label htmlFor="">Pais</label>
                            <input type="text" class="form-control" name="username" placeholder="Pais" value={Pais} onChange={(e) => setPais(e.target.value)} required />
                            <label htmlFor="">Departamento</label>
                            <input type="text" class="form-control" name="username" placeholder="Departamento" value={Departamento} onChange={(e) => setDepartamento(e.target.value)} required />
                            <label htmlFor="">Tecnologia</label>
                            <input
                                type="text"
                                class="form-control"
                                name="username"
                                placeholder="Tecnologia"
                                value={Tecnologia}
                                onChange={(e) => setTecnologia(e.target.value.split(','))}
                                required
                            />
                            <label htmlFor="">Salario</label>
                            <input type="text" class="form-control" name="username" placeholder="Salario" value={salario} onChange={(e) => setSalario(e.target.value)} required />
                            <label htmlFor="">Biografia</label>
                            <input type="text" class="form-control" name="username" placeholder="Biografia" value={biografia} onChange={(e) => setBiografia(e.target.value)} required />
                            <label htmlFor="">Stack</label>
                            <input
                                type="text"
                                class="form-control"
                                name="username"
                                placeholder="Stack"
                                value={Stack}
                                onChange={(e) => setStack(e.target.value.split(','))}
                                required
                            />
                            <div className='boton-post-candidatos'>
                                <button className='button4' type='button' onClick={postData} >Enviar Informacion</button>
                                <button className='button5' type='submit' ><a href="http://localhost:3000/">Cancelar Envio</a></button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
    </>
    
  )
}
