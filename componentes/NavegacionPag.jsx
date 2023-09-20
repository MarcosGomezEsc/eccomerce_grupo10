import { Link, Outlet } from "react-router-dom"
import '../cssComponentes/headerNavegacion.css'
import Carrito from "./Carrito"

export const NavegacionPag =()=>{
    return (

            
        <>
        <header className="header">
          <div className="logo">
            <img
              src="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Clipart.png"
              alt=""
            />
          </div>
          <div>
          <Carrito>Carrito</Carrito>
          </div>
  
          <nav className="nav">
            <ul className="ul">
              <li>
                <a id="/">Inicio</a>
              </li>
              <li>
                <a id="/productos">Productos</a>
              </li>
              <li>
                <a id="/acerca-de">Acerca de</a>
              </li>
              <li>
                <a id="/contacto">Contacto</a>
              </li>
            </ul>
          </nav>
          <Outlet />
        </header>
        <h2>Le damos la bienvenida a PokeTienda</h2>
        <h3>¿Qué personaje desea llevar?</h3>
        
      </>

  


    )
}
