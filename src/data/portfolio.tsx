import React from 'react';

type Portfolio = {
    name: string,
    url: string,
    id: Number
}

let portfolio: Array<Portfolio> = [
    {
        name: "Boss Machine",
        url: "https://raposomat.github.io/boss-machine",
        id: 1
    },
    {
        name: "Jammming",
        url: "http://ohmyjam.surge.sh",
        id: 2
    }
];

export const getPortfolio = () => {
    return portfolio;
}