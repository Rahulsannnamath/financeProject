import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import NavBar from '../NavBar';
import Footer from '../Footer';
function HomePage() {
    return ( 
      <>
      {/* <NavBar/> */}
      <Hero/>
      <Awards/>
      <Stats/>
      {/* <Footer/> */}
      </>

     );
}

export default HomePage;