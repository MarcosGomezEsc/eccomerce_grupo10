import { Link, Outlet } from "react-router-dom"
import '../cssComponentes/headerNavegacion.css'
import PokeLista from "./PokeLista"

export const NavegacionPag =()=>{
    return (

            
            <header className="header">
                <div className="logo">
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Clipart.png" alt="" />
                </div>
                
                <nav className="nav">
                    <ul className="ul">
                        <li>Log In</li>
                    </ul>
                </nav>
            <Outlet></Outlet>
            </header>


    )
}