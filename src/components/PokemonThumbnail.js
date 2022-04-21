import React from 'react'
import './App.css';


const PokemonThumbnail = ({id, name, image, type, PokemonData, setVisible, setSelectedPokemon}) => {

    const style = `thumb-container ${type}`
    
    return (
        <div className ={style} onClick={() => {
            setSelectedPokemon(PokemonData)
            setVisible(true)
          }}>

            <div className ="number">
                <strong>#0{id}</strong>

            </div>
            <img src={image} alt={name} height='300' width='360' />
            <div className="detail-wrapper">
                <h3 id="sizing">
                    {name}
                </h3>
                <div id="textsize">  Type: {type}</div>

            </div>


        </div>
        
    )

}

export default PokemonThumbnail