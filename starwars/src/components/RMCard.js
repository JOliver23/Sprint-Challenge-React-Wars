import React, { useState } from 'react';
import { CharCard, CharImg } from './StyleLibrary';

const RMCard = props => {
    const [character, setCharacter] = useState(props.character)
    
    return (
        <CharCard>
            <h2>{character.name}</h2>
            <CharImg src={character.image} alt={character.name} />
            <p>{character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender} </p>
            <div>
                <p>Location: {character.location.name}</p>
            </div>
        </CharCard>
    )
}

export default RMCard;