import React, { useState } from 'react';
import '../assets/css/register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'

const Register = () => {
    const [nombre,setNombre] = useState('');
    const [telefono,setTelefono] = useState('');
    const [tipo_usuario,setTipo_usuario] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const postData = (e) =>{
        if (!nombre || !telefono || !tipo_usuario || !email || !password) {
            setError(alert("Por favor, complete todos los campos obligatorios."));
            return;
        }
        e.preventDefault()

        axios.post("http://localhost:8003/usuarios/add",{
            withCredentials: true,
            nombre,
            telefono,
            tipo_usuario,
            email,
            password
        })
        .then((response) =>{
            swal({
                icon: "success",
                title: "Registrado",
                showConfirmButton: false,
                timer: 3000,
            });
            setTimeout(()=> {window.location.href="/login"}, 3000);
            console.log(response);
        })
        .catch(function (error){
            if(error.response){
                swal({
                    title: "¡Error!",
                    text: `${error.response.data.msg}`,
                    icon: "error",
                    confirmButtonText: "Close",
                });
            }
        })
    }


    return (
        <div className='contenido' >
            <div className="login">
                <div className="e-card1">
                    <div className="image-register">

                        <div className="content">
                            <div className="text">
                                <h2 >Welcome to website</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, beatae! Tempore ipsa iure ullam totam hic illo itaque reiciendis nulla, ipsam minus iste aut tempora?
                                    Iure quia architecto doloribus nostrum.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="e-card1 playing">
                    <div className="image"></div>

                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>

                    <div className="infotop">
                        <form  className="register-form">

                            <div className="register-box"> {/* Cambio del nombre de la caja */}
                                <p className='p'>Register</p>
                                <div className="user-box">
                                    <input type="text" id="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                                    <label htmlFor="Nombre" className="label">
                                        Nombre
                                    </label>
                                </div>
                                <div className="user-box">
                                    <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
                                    <label htmlFor="telefono" className="label">
                                        Telefono
                                    </label>
                                </div>
                                <div className="user-box">
                                    <input type="text" id="TipoPersona" value={tipo_usuario} onChange={(e) => setTipo_usuario(e.target.value)}  required />
                                    <label htmlFor="TipoPersona" className="label">
                                        Persona(Natural/Empresa)
                                    </label>
                                </div>
                                <div className="user-box">
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <label htmlFor="email" className="label">
                                        Email
                                    </label>
                                </div>

                                <div className="user-box">
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <label htmlFor="password" className="label">
                                        Password
                                    </label>
                                </div>

                            </div>

                            <button className="button" data-text="Awesome" type='button' onClick={postData}>
                                <span className="actual-text">&nbsp;Register&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;Register&nbsp;</span>
                            </button>

                            <p>
                                Already have an account?&nbsp;
                                <Link to="/login">Login!</Link>
                            </p>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;
