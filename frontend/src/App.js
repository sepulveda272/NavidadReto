import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Candidatos } from './pages/Candidatos';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Usuarios } from './pages/Usuarios';
import { Solicitudes } from './pages/Solicitudes';
import { RegistroCandidatos } from './pages/RegistroCandidatos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Candidatos></Candidatos>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/usuarios' element={<Usuarios></Usuarios>}></Route>
          <Route path='/solicitados' element={<Solicitudes></Solicitudes>}></Route>
          <Route path='/registrocandidatos' element={<RegistroCandidatos></RegistroCandidatos>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
