import React from 'react'


const PokemonThumbnail = ({id, name, image, type}) => {

    const style = `thumb-container ${type}`

    return (
        <div className ={style}>
            <div className ="number">
                <small>#0{id}</small>

            </div>
            <img src={image} alt={name} height='200' width='300' />
            <div className="detail-wrapper">
                <h3>
                    {name}
                </h3>
                <small>Type: {type}</small>

            </div>


        </div>
    )

}

export default PokemonThumbnail