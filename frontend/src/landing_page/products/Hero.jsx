import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
    <div className="container text-center mt-5 fs-3">
     
     <h1 className="font-weight-light">Technology</h1>
     <h3 className='font-weight-light'>sleek and modern intutive  trading platform</h3>
     <Link style={{fontSize:"70%"}} to="/pricing">Explore our pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>

    </div>

      );
}

export default Hero;