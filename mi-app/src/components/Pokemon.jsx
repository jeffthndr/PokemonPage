import React, { useEffect, useState } from "react"

function Pokemon() {
    const [pokemon, setPokemon] = useState();

    const [id, setId] = useState (1)

    const handleBefore = () => {
        return setId(id - 1 )

    }

    const handleAfter = () => {
        return setId( id +1)
    }
    
    useEffect(()=>{fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp)=>resp.json())
        .then((data)=>{setPokemon(data)})},[id])
    return(
        <div>{
            pokemon && 
            <div><h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            </div>}
            { id > 1 ? <button onClick={handleBefore}>Anterior</button> : <button disabled>Anterior</button>}
            <button onClick={handleAfter}>Siguiente</button>
            
        </div>
    )
}

export default Pokemon