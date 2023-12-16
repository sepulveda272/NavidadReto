import React from 'react'
import { InsertCandidatos } from '../components/InsertCandidatos'
import { NavbarCandidatos } from '../components/NavbarCandidatos'

import {FooterCandidatos} from '../components/FooterCandidatos'

export const RegistroCandidatos = () => {
  return (
    <div>
        <NavbarCandidatos/>
            <InsertCandidatos></InsertCandidatos>
        <FooterCandidatos/>
        
    </div>
  )
}
