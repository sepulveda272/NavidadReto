import axios from 'axios';
import React,{useEffect, useState } from 'react';

export const BodySolicitados = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(()=>{

          const token = localStorage.getItem('token')
  
          axios.get(`http://localhost:8003/solicitudes`,{
              withCredentials: true,
              headers: {
                  Authorization: `Bearer ${token}`,
              }
          })
          .then((response)=>{
              setApiData(response.data)
              console.log(response.data);
          })
          .catch((error) => {
              console.error('Error en la solicitud:', error);
          });
      },[]);
  
      const getData = () => {

        const token = localStorage.getItem('token')

        axios.get(`http://localhost:8003/solicitudes`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((getData) => {
            setApiData(getData.data);
        })
      }
  
      const onDelete = (_id) => {

        const token = localStorage.getItem('token')

        axios.delete(`http://localhost:8003/solicitudes/${_id}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(() => {
            getData();
        })
      }

  return (
    <div>
        <div className='bodyMain'>
            <div className='bodyMiniMain'>
                <h1>CampusLands</h1>
                <p>En CampusLands, creemos en el poder de la colaboración. Fomentamos un ambiente en el que los estudiantes no solo aprenden de los instructores, sino también unos de otros. Los proyectos colaborativos y las actividades grupales cultivan habilidades de trabajo en equipo, mientras que los eventos de networking proporcionan oportunidades para establecer conexiones valiosas en la industria. La comunidad de CampusLands se extiende más allá de las aulas, creando una red sólida de profesionales en ascenso.</p>
            </div>
        </div>
        <div className='contenedor-cards'>
            <div id="contendor-tabla" class="contenedor-tabla-solicitados">
                <table id="contenido-tabla" class="contenido-tabla-solicitados">
                    <thead id="thead" class="thead">
                        <th className='th'>Nombre</th>
                        <th className='th'>Empresa</th>
                        <th className='th'>Email</th>
                        <th className='th'>Telefono</th>
                        <th className='th'>Eliminar</th>
                    </thead>
                    <tbody id="tbody" class="tbody">
                        {apiData.map((data)=>{
                            return(
                                <tr>
                                    <td className='td'>{data.nombre}</td>
                                    <td className='td'>{data.empresa}</td>
                                    <td className='td'>{data.email_contacto}</td>
                                    <td className='td'>{data.telefono_contacto}</td>
                                    <td className='td'><button class="btn btn-danger eliminar" onClick={()=>onDelete(data._id)}>Borrar</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    </div>
  )
}
