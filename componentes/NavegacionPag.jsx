import { Outlet } from "react-router-dom"
import '../cssComponentes/headerNavegacion.css'

export const NavegacionPag =()=>{
    return (

            
            <header className="header">
                <div className="logo">
                    <img src="https://via.placeholder.com/20x20" alt="" />
                </div>
                
            <Outlet></Outlet>
            </header>


    )
}