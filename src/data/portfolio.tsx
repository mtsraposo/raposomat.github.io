import React from 'react';

type Portfolio = {
    name: string,
    path: string,
    number: Number
}

let portfolio: Array<Portfolio> = [
    {
        name: "Boss Machine",
        path: "boss-machine",
        number: 1
    }
];

export const getPortfolio = () => {
    return portfolio;
}