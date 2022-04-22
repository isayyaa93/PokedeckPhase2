

export default ({ isVisible, setVisible, selectedPokemon}) => {
    const {name} = selectedPokemon
    console.log(name)
    const style = `thumb-container ${selectedPokemon.types[0].type.name}`
    console.log(style)
    return(
      <div onClick={() => { return null }} className={style} id="pokemon-screen" style={{
        display: isVisible ? "flex" : "none" }}>
        <a href="#" className="close-button" onClick={() => { setVisible(false)}}>[x]</a>
        <strong className="name-fg">{name}</strong>
        <img className="char-portrait" src={selectedPokemon.sprites.other.dream_world.front_default} height="250" width="250" />
        <h3>TYPE</h3>
        {selectedPokemon.types.map((element) => {
        return(
        <b>{element.type.name}</b>
        )
        })}
        <h3>STATS</h3>
        {selectedPokemon.stats.map((element) => {
        return(<em>{element.stat.name}: {element.base_stat}</em>
        )})}
        <h3>MOVES</h3>
        <ul>
        {selectedPokemon.moves.map((element) => {
        return(<li>{element.move.name}</li>
        )})}
        </ul>
      </div>
    )
  }