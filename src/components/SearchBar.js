import React from "react";


function SearchBar({search, onSearchChange, nameInputRef}) {
    return (
        <nav id="format">
            <input className="searchbar"
            type="text"
            name="search"
            placeholder="Search Pokemons..."
            autoComplete="off"
            value={search}
            onChange={e=> onSearchChange(e.target.value)}
            ref={nameInputRef}
            />
        </nav>
    )
}

export default SearchBar