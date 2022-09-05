// import { useState } from "react";

const Cards = (characters) => {

    return (
        <div onClick={() => characters.handleClick(characters.character.id)} key={characters.character.id} className='card-item'>
            <img src={characters.character.img} alt={characters.character.name}/>{characters.character.name}
        </div>
    )
}

export default Cards;