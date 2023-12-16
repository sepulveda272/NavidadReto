import React from 'react'
import { NavbarCandidatos } from '../components/NavbarCandidatos'
import { BodySolicitados } from '../components/BodySolicitados'
import { FooterCandidatos } from '../components/FooterCandidatos'

export const Solicitudes = () => {
  return (
    <div>
         <NavbarCandidatos/>
            <BodySolicitados/>
        <FooterCandidatos/>
    </div>
  )
}
