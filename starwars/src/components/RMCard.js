import React, { useState } from 'react';
import { CharCard, CharImg, CardText, NameTag } from './StyleLibrary';

const RMCard = props => {
    const [character] = useState(props.character)
    
    return (
        <CharCard>
            <NameTag>{character.name}</NameTag>
            <CharImg src={character.image} alt={character.name} />
            <CardText type="info">Squanch: {character.status}</CardText>
            <CardText type="other">Origin: {character.origin.name}</CardText>
            <CardText type="info">Gender: {character.gender} </CardText>
            <CardText type="other">Location: {character.location.name}</CardText>
            
        </CharCard>
    )
}

export default RMCard;