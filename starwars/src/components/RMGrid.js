import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RMCard from './RMCard';
import { CharGrid } from './StyleLibrary';

function RMGrid() {
    const [rmData, setRMData] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => setRMData(response.data.results))
        .catch(err => console.log('Error: ', err))
    }, []);

    return (
        <CharGrid>
             {rmData.map((charObj) => {
                return <RMCard key={charObj.id} character={charObj} />
            })}
        </CharGrid>
    )
};

export default RMGrid;