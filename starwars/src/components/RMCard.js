import React, { useState } from 'react';
import { CharCard, CharImg, CardText } from './StyleLibrary';

const RMCard = props => {
    const [character, setCharacter] = useState(props.character)
    
    return (
        <CharCard>
            <h2>{character.name}</h2>
            <CharImg src={character.image} alt={character.name} />
            <CardText type="info">{character.status}</CardText>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender} </p>
            <p>Location: {character.location.name}</p>
            
        </CharCard>
    )
}

export default RMCard;