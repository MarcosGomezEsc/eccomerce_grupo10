import '.././cssComponentes/Opciones.css'


function Opciones() {

  return (
    <div className="div_contedor">
        <div className="eleccion">
            <div className="cards">
                <div className="card_de_Nuevos">
                    <h2>Nuevo</h2>
                    <img src="https://via.placeholder.com/100x100" alt="" />
                </div>
                <div className="card_de_Usados">
                    <h2>Usado</h2>
                    <img src="https://via.placeholder.com/100x100" alt="" />
                </div>
                <div className="card_de_Alquilar">
                    <h2>Alquilar</h2>
                    <img src="https://via.placeholder.com/100x100" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Opciones;