import '../cssComponentes/PokeCards.css'


export default function PokemonCards( {item} ){
    return(
        <>
                
        <div className="PokeCartaContenedor">
            <div className="pokeDivImg">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="pokeDivDato">

                <h1>{item.name}</h1>
                <h3>Precio: ${item.id*265}</h3>
                <p>Descripción: Trabajado con elementos de reciclaje, 
                    este PokeAmigo no solo ayuda al planeta sino que 
                    te hará compaía mientras jugás a la play o 
                    estás ayudando ¡No te lo pierdas!</p>
            </div>
        </div>
        </>
    )
}