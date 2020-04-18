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
    background: radial-gradient(#91592A, #F2F6BC);
`;

export const CharImg = styled.img`
    width: 100%;
    height: 60rem;
`;