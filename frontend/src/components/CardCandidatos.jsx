import axios from 'axios';
import swal from 'sweetalert'
import "../assets/css/modal.css"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const CardCandidatos = () => {
  const [apiData, setApiData] = useState([]);
  const [oneData, setOneData] = useState([]);
  const [nombre,setNombre] = useState('');
  const [Apellido,setApellido] = useState('');
  const [empresa,setEmpresa] = useState('');
  const [email_contacto,setEmail_contacto] = useState('');
  const [telefono_contacto,setTelefono_contacto] = useState('');
  const [setError] = useState('');


  useEffect(() => {
    getData();
  }, []);

  

  const getData = () => {
    const token = localStorage.getItem('token');

    axios.get(`http://localhost:8003/candidatos/`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setApiData(response.data);
      });
  };

  const onDelete = (_id) => {
    const token = localStorage.getItem('token');

    axios.delete(`http://localhost:8003/candidatos/borro/${_id}`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        getData();
      });
  };

  const storedUser = localStorage.getItem('user');
  const localUser = storedUser ? JSON.parse(storedUser) : null;

  const showHola = localUser && localUser.rol === '65794ef885858c0baa350e4a';

  const openModal = (_id) => {
    axios.get(`http://localhost:8003/candidatos/${_id}`)
      .then((response) => {
        setOneData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  };

  const postData = (e) => {
    e.preventDefault();
  
    if (!nombre || !Apellido || !empresa || !email_contacto || !telefono_contacto) {
      setError(alert("Por favor, complete todos los campos obligatorios."));
      return;
    }
  
    axios.post("http://localhost:8003/solicitudes/add", {
      nombre,
      Apellido,
      empresa,
      email_contacto,
      telefono_contacto,
    }, {
      withCredentials: true,  // Asegúrate de enviar las credenciales
    })
      .then((response) => {
        console.log("hola");
        swal({
          icon: "success",
          title: "Solicitud enviada",
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
  
  const storedToken = localStorage.getItem('token');
  const localToken = storedToken ? JSON.parse(storedToken) : null;

  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {oneData.map((data)=>{
                return(
                    <div>
                        <div className='titulo-modal'>
                            <h1>{data.nombre} {data.apellido}</h1>
                            <h3>{data.Especialidad} Developer</h3>
                        </div>
                        <div className='contenido-modal'>
                            <div className='carta-presentacion'>
                                <div className='contenedor-imagen-modal'>
                                    <img src={data.Imagen}  alt="" />
                                </div>
                                <div className='items-candidato-modal'>
                                    <ul>
                                        <li><strong>Seniority: </strong> {data.NivelSeniority} </li>
                                        <hr />
                                        <li><strong>Especialidad: </strong>{data.Especialidad} Desarrollo</li>
                                        <hr />
                                        <li><strong>Tecnologías: </strong>{data.Tecnologia.map((tecnologia) => (<li>{tecnologia.nombre}</li>))}
                                        </li>
                                        <hr />
                                        <li><strong>Ubicación: </strong> {data.ubicacion.Pais}</li>
                                        <hr />
                                        <li><strong>Pretensión Salarial: </strong> {data.salario} USD</li>
                                        <hr />
                                        <li>{data.NivelIngles}</li>


                                    </ul>
                                </div>
                            </div>

                            <div className='biografia-modal'>
                                <h1>BIO</h1>
                                <p>{data.biografia}</p>
                            </div>

                            <div className='stack-developer'>
                              <h2>Stack developer</h2>
                                <ul>
                                {data.Stack.map((stack) => (<li>{stack.nombre}: {stack.descripcion} </li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
              })}
                { localToken && <div className='formulario-modal'>
                    <h2>Solicitar información del candidato</h2>
                    <div className='contenido-form-modal'>
                        <form action="">
                        <div className='p1'>
                            <input type="text" placeholder='Nombre'  value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                        </div>
                        <div>
                            <input type="text" placeholder='Apellido' value={Apellido} onChange={(e) => setApellido(e.target.value)} required/>
                        </div>
                        <div>
                            <input type="text" placeholder='Empresa' value={empresa} onChange={(e) => setEmpresa(e.target.value)} required/>
                        </div>
                        <div>
                            <input type="text" placeholder='Email de contacto' value={email_contacto} onChange={(e) => setEmail_contacto(e.target.value)} required/>
                        </div>
                        <div>
                            <input type="number" placeholder='Telefono de contacto' value={telefono_contacto} onChange={(e) => setTelefono_contacto(e.target.value)} required/>
                        </div>
                        <button className='btn btn-primary' type='button' data-text="Awesome" onClick={postData}>
                          enviar
                        </button>
                        </form>
                    </div>
                </div>}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className='contenedor-cards'>
        {apiData.map((data) => (
          <div className="card" key={data._id}>
            <div className="top-section">
              <img src={data.Imagen} alt="" />
              <div className="border"></div>
              <div className="icons">
                <div className="logo">
                  <h5>{data.Especialidad}</h5>
                </div>
              </div>
            </div>
            <div className="bottom-section">
              <span className="title">{data.nombre} {data.apellido}</span>
              <div className="row row1">
                <div className="item">
                  <span className="big-text"><FontAwesomeIcon icon={faMapMarkerAlt} /> {data.ubicacion.Pais}</span>
                </div>
                <div className="item">
                  <span className="big-text"><FontAwesomeIcon icon={faDollarSign} /> {data.salario} USD</span>
                </div>
                <div className="item">
                  <span className="big-text"><FontAwesomeIcon icon={faGlobe} /> Ingles {data.NivelIngles}</span>
                </div>
              </div>
            </div>
            <div className='contenedor-tecnologias-card'>
              <p><strong>Tecnologías</strong></p>
              <div className='tecnologias-card'>
                {data.Tecnologia.map((tecnologia) => (
                  <p key={tecnologia._id}>{tecnologia.nombre}</p>
                ))}
              </div>
            </div>
            <center>
              <button
                type="button"
                className="btn button-card"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => {
                  openModal(data._id);
                }}
              >
                Ver candidato
              </button> 
              {showHola && <button class="btn btn-danger eliminar" onClick={() => onDelete(data._id)}>Borrar</button>}
            </center>
          </div>
        ))}
      </div>
    </>
  );
};
