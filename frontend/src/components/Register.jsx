import React, { useState } from 'react';
import '../assets/css/register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [nombre,setNombre] = useState('');
    const [telefono,setTelefono] = useState('');
    const [personal,setPersona] = useState('');
    const [emai,setEmail] = useState('');
    const [password,setPassword] = useState('');

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
                                    <input type="text" id="Nombre" required />
                                    <label htmlFor="Nombre" className="label">
                                        Nombre
                                    </label>
                                </div>
                                <div className="user-box">
                                    <input type="tel" id="telefono" required />
                                    <label htmlFor="telefono" className="label">
                                        Telefono
                                    </label>
                                </div>
                                <div className="user-box">
                                    <input type="text" id="TipoPersona"  required />
                                    <label htmlFor="TipoPersona" className="label">
                                        Persona(Natural/Empresa)
                                    </label>
                                </div>
                                <div className="user-box">
                                    <input type="email" id="email"  required />
                                    <label htmlFor="email" className="label">
                                        Email
                                    </label>
                                </div>

                                <div className="user-box">
                                    <input type="password" id="password"  required />
                                    <label htmlFor="password" className="label">
                                        Password
                                    </label>
                                </div>

                            </div>

                            <button className="button" data-text="Awesome">
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
