export default ({ isVisible, setVisible, selectedPokemon}) => {
    const {name} = selectedPokemon
    console.log(selectedPokemon.types)
    return(
      <div onClick={() => { return null }} className="pokemon-screen" style={{
        display: isVisible ? "block" : "none" }}>
        <a href="#" className="close-button" onClick={() => { setVisible(false)}}>[x]</a>
        <strong className="name-fg">{selectedPokemon.name}</strong>
        <img className="char-portrait" src={selectedPokemon.sprites.other.dream_world.front_default} />
        {selectedPokemon.types.map((element) => {
        return(
        <b>{element.type.name}</b>
        )
        })}
        {selectedPokemon.stats.map((element) => {
        return(<em>{element.stat.name}: {element.base_stat}</em>
        )})}
        {selectedPokemon.moves.map((element) => {
        return(<small>{element.move.name}</small>
        )})}
      </div>
    )
  }