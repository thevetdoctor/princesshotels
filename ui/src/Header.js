import React from 'react';

export const Header = ({activePage, handleActive}) => {
    
    return(
    <div class="product-tab-list-wrap text-center mb-40 yellow-color">
    <div class="product-tab-list nav">
        <span onClick={() => handleActive(1)}>
            <h5>SOFTs, ENERGY & YOGHURT</h5>
        </span>
        <span onClick={() => handleActive(2)}>
            <h5>WINES</h5>
        </span>
        <span onClick={() => handleActive(3)}>
            <h5> ALCOHOL </h5>
        </span>
        <span onClick={() => handleActive(4)}>
            <h5>BEER & SMOKE</h5>
        </span>
        <span onClick={() => handleActive(5)}>
            <h5>COCKTAIL & CHAMPANGE</h5>
        </span>
    </div>
    <p>Princess Luxury Hotels and Tourism has been elegantly crafted and prearranged to achieve a measure of comfortable luxury to satisfy the senses of every guest from all over the world.</p>
    </div>
    )
};