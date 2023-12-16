import React from 'react'


export const InsertCandidatos = () => {

    
  return (
    <>
          <div className='contenedor-insert-candidato'>
        
                <div className='contenido-insert-candidato'>
                    <div class="wrapper">
                        <form class="form-signin">       
                            <h2 class="form-signin-heading">Ingresa tu Candidatos</h2>
                            <label htmlFor="">Nombre</label>
                            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                            <label htmlFor="">Apellido</label>
                            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                            <label htmlFor="">Especialidad </label>
                            <select name="" id="select-especialidad">
                                <option value="value1">Seleccione Especialidad</option>
                                <option value="Backend">Backend</option>
                                <option value="Frontend">Frontend</option>
                                <option value="Fullstack">Fullstack</option>
                            </select>
                            <label htmlFor="">Nivel Seniority (select)</label>
                            <select name="" id="select-nivel-seniority">
                                <option value="value1">Seleccione Nivel Seniority</option>
                                <option value="Jr">Jr.</option>
                                <option value="Jr">Jr.+</option>
                                <option value="Ssr">Ssr.</option>
                                <option value="Sr">Sr.</option>
                                <option value="Ssr">Ssr.+</option>
                            </select>
                            <label htmlFor="">Nivel Ingles (select)</label>
                            <select name="" id="select-nivel-ingles">
                                <option value="value1">Seleccione Nivel Ingles</option>
                                <option value="Basico">Ingles Basico</option>
                                <option value="Intermedio">Ingles Intermedio</option>
                                <option value="Intermedio/Avanzado">Ingles Intermedio - Avanzado</option>
                                <option value="Avanzado">Ingles Avanzado</option>
                            </select>
                            <label htmlFor="">Pais, Departamento</label>
                            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                            <label htmlFor="">Tecnologia</label>
                            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                            <label htmlFor="">Salario</label>
                            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                            <label htmlFor="">Biografia</label>
                            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                            <label htmlFor="">Stack</label>
                            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />

                            <div className='boton-post-candidatos'>
                                <button className='button4' type='submit' >Enviar Informacion</button>
                                <button className='button5' type='submit' ><a href="http://localhost:3000/">Cancelar Envio</a></button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
    </>
    
  )
}
