import React from 'react'
import { NavbarCandidatos } from '../components/NavbarCandidatos'
import { BodyCandidatos } from '../components/BodyCandidatos'
import {FooterCandidatos} from '../components/FooterCandidatos'

export const Candidatos = () => {
  return (
    <>
        <NavbarCandidatos/>
        <BodyCandidatos>
          
        </BodyCandidatos>
        <FooterCandidatos/>
    </>
  )
}

export default Candidatos;