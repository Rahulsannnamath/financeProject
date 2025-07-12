import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
<div className='container p-5 mb-5'>
    <div className="row text-center">
     <img src="homeHero.png" alt="hero image"  className='mb-5'/>
     <h1 className='mt-5'>Invest in everything</h1>
     <p>Online Platform to invest in stocks , derivatives , Mutal Funds and more</p>
      <Link style={{width : "25%" , margin:"0px auto"}}  className="btn btn-primary"  to="/signup">signup</Link>
    </div>
    <br /> <br />
</div>
     );
}

export default Hero;