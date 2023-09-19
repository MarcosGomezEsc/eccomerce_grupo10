
import { Navigate } from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavegacionPag } from './componentes/NavegacionPag'
import './cssComponentes/App.css'
import { PokemonProvider } from './contexto/FetchPokemones'
import DataPokemo from './componentes/obtenerDataPokemones'
import PagesPokemones from './componentes/PagesPokemones'


//____

import Inicio from './componentes/Inicio'
import Productos from './componentes/Productos'
import AcercaDe from './componentes/AcercaDe'
import Contacto from './componentes/Contacto'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <PokemonProvider>

        <Routes>
          <Route path='/' element={<NavegacionPag/>} >
              <Route path="/" exact element={<Inicio></Inicio>} />
            <Route path="/productos" element={<Productos></Productos>} />
            <Route path="/acerca-de" element={<AcercaDe></AcercaDe>} />
            <Route path="/contacto" element={<Contacto></Contacto>} />
          </Route>


          <Route path='*' element={<Navigate to="/" />}></Route>
        </Routes>

        <PagesPokemones></PagesPokemones>
          

        <DataPokemo></DataPokemo>
        
        <AcercaDe>    </AcercaDe>
      </PokemonProvider>
    </BrowserRouter>

    </>
  )
}

export default App
