import React from 'react';
import styled from 'styled-components';

export const CharGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    
`;

export const CharCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem;
    width: 40vw;
    background: radial-gradient(#1EDDA3, #896255, #1EDDA3);
    border: 1rem double slategrey;
    border-radius: 10%;
`;

export const CharImg = styled.img`
    width: 80%;
    height: 60rem;
    align-self: center;
    border: 2rem solid #9069D8;
    border-radius: 10%;
`;

export const CardText = styled.p`
    font-family: 'Baloo Bhaina 2', cursive;
    background-color: black;
    font-size: x-large;
    
    ${props => props.type ==="info" ? 'color: #1CE0A7; border: .5rem dotted #3BCCFD' : null}
`;