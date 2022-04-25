import React from 'react';

type Portfolio = {
    name: string,
    number: Number
}

let portfolio: Array<Portfolio> = [
    {
        name: "Jamming",
        number: 1
    }
];

export const getPortfolio = () => {
    return portfolio;
}