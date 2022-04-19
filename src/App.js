
<<<<<<< HEAD
import './App.css';
import React from 'react'
import { useRef, useEffect, useState } from "react"
import PokemonThumbnail from "./components/PokemonThumbnail"
import SearchBar from "./components/SearchBar"

function App() {

  const[allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
  const [search, setSearch] = useState("")

  const nameInputRef = useRef() ///i used this useRef to make sure search bar is in focus upon render
  

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    
    
    setLoadMore(data.next)

    function createPokemonObject (results) {
      results.forEach(async (pokemon) => {
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
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
  

  return (
    <div className ='app-container'>
      <h1>Pokemon! Project 2 for phase 2:)</h1>

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
            />
            )}

        </div>
        <button className="load-more" onClick={()=>getAllPokemons()}>Load More</button>

=======
import React, { useState } from "react"
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About'
import PokeDex from './components/PokeDex';

function App() {
  const [page, setPage] = useState("/")
  
  return (
      <div>
          <NavBar onChangePage={setPage} />
          <Routes>
              <Route path="/about">
                  
              </Route>
              <Route path="/pokedex">
                  <PokeDex/>
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="*">
                  <h1>404 not found</h1>
              </Route>
          </Routes>
>>>>>>> origin/emmanuel-branch
      </div>
  );
}

export default App;
