import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RMCard from './RMCard';

function RMGrid() {
    const [rmData, setRMData] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => setRMData(response.data.results))
        .catch(err => console.log('Error: ', err))
    }, []);

    return (
        <div className="container">
            <div className="data-holder">
                {rmData.map((charObj) => {
                    return <RMCard key={charObj.id} character={charObj} />
                })}
            </div>
        </div>
    )
};

export default RMGrid;