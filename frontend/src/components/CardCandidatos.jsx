import React from 'react'
import avatar from '../assets/img/3523424-02-300x300.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ModalCandidatos } from './ModalCandidatos';

export const CardCandidatos = () => {
  return (
    <>
        <div className='contenedor-cards'>
            <div className='contenedor-card'>
                <div className='contenido-card'>
                    <div className='img-card'>
                        <img src={avatar} alt="" />
                        <p>Backend Developer</p>
                    </div>
                    <div className='text-card'>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Colombia</p>
                        <hr />
                        <p><FontAwesomeIcon icon={faDollarSign} /> 1000 USD</p>
                        <hr />
                        <p><FontAwesomeIcon icon={faGlobe} /> Ingles Basico</p>
                        
                        <div className='contenedor-tecnologias-card'>
                            <p><strong>Tecnologias</strong></p>
                            <div className='tecnologias-card'>
                                <p>DTS</p>
                                <p>ETL</p>
                                <p>AWS</p>
                                <p>Microservicios</p>
                                <p>Node</p>
                                <p>React</p>
                            </div>
                        </div>
                        <button className='button-card abrir-modal'>Ver candidato</button>
                    <ModalCandidatos/>
                       
                    </div>
                </div>

            </div>
            
            <div class="card">
                <div class="top-section">
                    <img src="https://cdn.pixabay.com/photo/2022/09/26/20/29/puffer-fish-7481518_1280.jpg" alt=""  width={"0px"}/>
                    <div class="border"></div>
                    <div class="icons">
                    <div class="logo">
                        <h3>Backend</h3>
                    </div>
                    
                    </div>
                </div>
                <div class="bottom-section">
                    <span class="title">CampusLands</span>
                    <div class="row row1">
                    <div class="item">
                        <span class="big-text">Colombia</span>
                        <span class="regular-text"><FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                    </div>
                    <div class="item">
                        <span class="big-text">100%</span>
                        <span class="regular-text">Free for use</span>
                    </div>
                    <div class="item">
                        <span class="big-text">38,631</span>
                        <span class="regular-text">Contributers</span>
                    </div>
                    </div>
                </div>
                    <div className='contenedor-tecnologias-card'>
                        <p><strong>Tecnologias</strong></p>
                        <div className='tecnologias-card'>
                            <p>DTS</p>
                            <p>ETL</p>
                            <p>AWS</p>
                            <p>Microservicios</p>
                            <p>Node</p>
                            <p>React</p>
                        </div>
                    </div>
                    <button className='button-card abrir-modal'>Ver candidato</button>
                    <ModalCandidatos/>
             
                </div>

           
          
                      
            </div>
     </>
  )
}
