import '../cssComponentes/PokeCards.css'
import { useState } from 'react';

function Carrito() {

    const [isCartOpen, setIsCartOpen] = useState(false);
    
    {isCartOpen && (
        <div className="cart-popup">
          <h2>Carrito de Compras</h2>
          <button onClick={() => setIsCartOpen(false)}>Cerrar</button>
        </div>
      )}
    return (
      <div className='cartImg'>
        <img
            className={`imgCart ${isCartOpen ? 'active' : ''}`}
            src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
            alt=""
            onClick={() => setIsCartOpen(true)}
            />
      </div>
    );
  }
  

  export default Carrito