import React, { useState, useEffect } from 'react';
import '../assets/css/login.css'; // Importa el archivo CSS con los estilos
import { Link, Navigate } from 'react-router-dom';
import axios from "axios"
import swal from 'sweetalert'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleIniciarClick = (e) =>{
        if (!email || !password) {
            setError(alert("Por favor, complete todos los campos obligatorios."));
            return;
        }
        e.preventDefault()

        axios
            .post("http://localhost:8003/login/logeate",{
                withCredentials: true,
                email,
                password
            })
            .then((response) => {
                swal({
                    icon: "success",
                    title: "Iniciando Sesion",
                    showConfirmButton: false,
                    timer: 3000,
                });
                //document.cookie = `secretX=${response.data.secretX}`;
                document.cookie = `token = ${response.data.token}`;
                localStorage.setItem('token', JSON.stringify(response.data.token))
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setTimeout(()=> {window.location.href = "/"}, 3000);
                console.log(response.data.user.rol);
            })
            .catch(function (error) {
                if(error.response){
                    swal({
                        title: "¡Error!",
                        text: `${error.response.data.msg}`,
                        icon: "error",
                        confirmButtonText: "Close",
                    });
                } else {
                    swal({
                        title: "¡Error!",
                        text: `Algo anda mal, llama servicio tecnico :(`,
                        icon: "error",
                        confirmButtonText: "Close",
                    });
                }
              });
    }


    return (

        <div className='contenido'>
            <div className="login">
                <div className="e-card">
                    <div className="image-conte">

                        <div className="content">
                            <div className="text">
                                <h2 >Welcome to website</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, beatae! Tempore ipsa iure ullam totam hic illo itaque reiciendis nulla, ipsam minus iste aut tempora?
                                    Iure quia architecto doloribus nostrum.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="e-card playing">
                    <div className="image"></div>

                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>

                    <div className="infotop">
                        <form  className="login-form" method="post" onSubmit={(e)=>handleIniciarClick(e)}>



                            <div className="login-box">
                                <p className='p'>Login</p>
                                <div className="user-box">
                                    <input type="email" id="username" value={email} onChange={(e) => setEmail(e.target.value)}  required />
                                    <label htmlFor="username" className="label">
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



                            <button className="button" data-text="Awesome" type='submit'>
                                <span className="actual-text">&nbsp;Login&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;Login&nbsp;</span>
                            </button>

                            <p>
                                Don't have an account?
                                <Link to="/register">Registro!</Link>
                            </p>


                        </form>
                    </div>
                </div>

            </div>

        </div>





    );
};

export default Login;
