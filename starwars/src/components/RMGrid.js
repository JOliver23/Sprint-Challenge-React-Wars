import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RMGrid() {
    const [rmData, setRMData] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => setRMData(response.data.results))
        .catch(err => console.log('Error: ', err))
    }, []);

    return (
        <div />
    )
};

export default RMGrid;