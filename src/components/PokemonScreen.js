export default ({ isVisible, setVisible, selectedPokemon}) => {
    return(
      <div onClick={() => { return null }} className="pokemon-screen" style={{
        display: isVisible ? "block" : "none" }}>
        <a href="#" className="close-button" onClick={() => { setVisible(false)}}>[x]</a>
        <h2 className="name-fg">{selectedPokemon.name}</h2>
        {/* <img className="char-portrait" src={selectedPokemon.sprites.other.dream_world.front_default} /> */}
        {selectedPokemon.types.map((element) => {
        <h3>{element}</h3>
        })}
        {selectedPokemon.stats.map((element) => {
        <h4>{element.stat.name}: {element.base_stat}</h4>
        })}
        {selectedPokemon.moves.map((element) => {
        <h5>{element.move.name}</h5>
        })}
      </div>
    )
  }