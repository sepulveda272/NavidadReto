import axios from 'axios';
import React,{useEffect, useState } from 'react';


export const BodyUsuarios = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(()=>{

        const token = localStorage.getItem('token')

        axios.get(`http://localhost:8003/usuarios`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response)=>{
            setApiData(response.data)
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error.response);
        });
    },[]);

    const getData = () => {

        const token = localStorage.getItem('token')

        axios.get(`http://localhost:8003/usuarios`, {
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

        axios.delete(`http://localhost:8003/usuarios/${_id}`, {
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
                <h1>ESTE ES UN TITULO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ad! Ipsam cum dolor suscipit tempore aliquam praesentium eum asperiores nostrum minus voluptate voluptatibus sunt earum, laborum quis mollitia assumenda maxime?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam unde nobis amet quasi sapiente. Impedit nostrum doloribus rem! Mollitia porro beatae ex sed repudiandae unde, autem eos consequuntur consequatur iste.</p>
            </div>
        </div>
        <div className='contenedor-cards'>
            <div id="contendor-tabla" class="contenedor-tabla-usuario">
                <table id="contenido-tabla" class="contenido-tabla-usuario">
                    <thead id="thead" class="thead">
                        <th className='th'>Nombre</th>
                        <th className='th'>Tipo de usuario</th>
                        <th className='th'>Email</th>
                        <th className='th'>Telefono</th>
                        <th className='th'>Rol</th>
                        <th className='th'>Eliminar</th>
                    </thead>
                    <tbody id="tbody" class="tbody">
                        {apiData.map((data)=>{
                            return(
                                <tr>
                                    <td className='td'>{data.nombre}</td>
                                    <td className='td'>{data.tipo_usuario}</td>
                                    <td className='td'>{data.email}</td>
                                    <td className='td'>{data.telefono}</td>
                                    <td className='td'>{data.Rol}</td>
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
