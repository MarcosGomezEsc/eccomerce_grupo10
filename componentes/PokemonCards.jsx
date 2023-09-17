export default function PokemonCards( {item} ){
    return(
        <>
        <h1>{item.name}</h1>
                
        <div>
          <img src={item.image} alt={item.name} />
        </div>
        </>
    )
}