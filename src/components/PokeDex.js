import './App.css';
import React, {useRef, useState, useEffect} from 'react'
import PokemonThumbnail from './PokemonThumbnail'
import SearchBar from './SearchBar';
import PokemonScreen from './PokemonScreen';

const dummyObject = {
  name: 'Dummy',
  sprites: {other: {dream_world:{front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg" }} },
  types: [{type:{name: 'grass'}}],
  stats: [{base_stat: 50, stat:{name: "hp"}}],
  moves: [{move:{name: 'tackle'}}]  
}

const PokeDex = () => {
  const [visible, setVisible] = useState(false)
  const[allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
  const [search, setSearch] = useState("")
  const nameInputRef = useRef() ///i used this useRef to make sure search bar is in focus upon render
  const [selectedPokemon, setSelectedPokemon] = useState(dummyObject)
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    
    setLoadMore(data.next)
    
    function createPokemonObject (result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        console.log(data)
        setAllPokemons(currentList => [...currentList, data])
      })
      
    }
    createPokemonObject(data.results)
    
  }
  
  useEffect(()=>{
    getAllPokemons()
    nameInputRef.current.focus()
  },[])
  
  const SearchFilteredPokemons = allPokemons.filter(element => element.name.toLowerCase().includes(search.toLowerCase()))
  console.log(selectedPokemon)
  console.log('passing by')
  
  return(
    <div className="pokemon-container">
      <SearchBar nameInputRef={nameInputRef} search={search} onSearchChange={setSearch}/>
    <div className="all-container">
    {SearchFilteredPokemons.map((pokemon, index) => 
        <PokemonThumbnail 
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        type={pokemon.types[0].type.name}
        key={index}
        PokemonData={pokemon}
        setVisible={setVisible}
        setSelectedPokemon={setSelectedPokemon}
        />
        )}

    </div>
    <button className="load-more" onClick={()=>getAllPokemons()}>Load More</button>
    {console.log('caught')}
    <PokemonScreen isVisible={visible} setVisible={setVisible} selectedPokemon={selectedPokemon}/>

  </div>
        

         
  )
}

export default PokeDex;