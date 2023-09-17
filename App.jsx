
import { Navigate } from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavegacionPag } from './componentes/NavegacionPag'

import './cssComponentes/App.css'
import { PokemonProvider } from './contexto/FetchPokemones'
import DataPokemo from './componentes/obtenerDataPokemones'
import PagesPokemones from './componentes/PagesPokemones'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <PokemonProvider>


        <Routes>
          <Route path='/' element={<NavegacionPag/>} >
            <Route path='pokemon/:id' element={<h2>Mantenimiento</h2>}></Route>
            <Route path='/search' element={<h2>Mantenimiento</h2>}></Route>
            <Route path='' element={<></>}></Route>

          </Route>

          

          <Route path='*' element={<Navigate to="/" />}></Route>
        </Routes>

        <PagesPokemones></PagesPokemones>


        <DataPokemo></DataPokemo>
        
      </PokemonProvider>
    </BrowserRouter>
    </>
  )
}

export default App
