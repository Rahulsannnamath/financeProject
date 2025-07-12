import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';

function ProductPage() {
    return (  
        <>
       <Hero/>
       <LeftImage imageURL={"kite.png"} productName={"Kite"} ProductDescription={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}/>
       <RightImage imageURL={"console.png"} productName={"Console"}  ProductDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}/>
       <LeftImage imageURL={"coin.png"} productName={"coin"} ProductDescription={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}/>
        </>
    );
}

export default ProductPage
