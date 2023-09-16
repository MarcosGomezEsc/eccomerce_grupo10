function Formuser(){
    return (
        <div className="divform">
            <form action="">
                <label 
                htmlFor="nombre" 
                className="label">Nombre y Apellido
                    <input 
                    type="text" 
                    placeholder="nombre y apellido"
                    id="nombre y apellido"/>
                </label>
                <label 
                htmlFor="mail" 
                className="label">Mail
                    <input 
                    type="mail" 
                    placeholder="mail"
                    id="mail"/>
                </label>
                <label 
                htmlFor="contraseña" 
                className="label"> Contraseña
                    <input 
                    type="password" 
                    placeholder="contraseña"
                    id="contraseña"/>
                </label>
                <input type="submit" value="Log In" />
            </form>
        </div>

    )
}

export default Formuser