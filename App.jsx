import Home from '../../pages/Home'
import Autos from './componentes/Autos'
import Compra from './componentes/Compra'
import Error404 from './componentes/404_Error'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './cssComponentes/App.css'
import { DataProvider } from './cars'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <DataProvider>



        <Link to="/autos">Autos</Link>
        <Link to="/compra">Compra</Link>



        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/autos" element={<Autos />}>
            </Route>
            <Route path="/compra" element={<Compra/>}></Route>
            <Route path="*" element={<Error404/>}></Route>
        </Routes>

      </DataProvider>
    </BrowserRouter>
    </>
  )
}

export default App
