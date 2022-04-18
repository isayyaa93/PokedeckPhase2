import './App.css';
import react, {useState, useEffect} from 'react'
import PokemonThumbnail from './PokemonThumbnail'

const PokeDex = () => {
    const[allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject (result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })

    }
    createPokemonObject(data.results)
    
  }

  useEffect(()=>{
    getAllPokemons()
  },[])
  return(
    <div className="pokemon-container">
    <div className="all-container">
    {allPokemons.map((pokemon, index) => 
        <PokemonThumbnail 
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        type={pokemon.types[0].type.name}
        key={index}
        />
        )}

    </div>
    <button className="load-more" onClick={()=>getAllPokemons()}>Load More</button>

</div>

  )
}

export default PokeDex;