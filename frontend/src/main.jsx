import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from './landing_page/home/HomePage.jsx';
import  AboutPage from "./landing_page/about/AboutPage.jsx";
import SignUp from "./landing_page/signup/Signup.jsx";
import PricingPage  from "./landing_page/pricing/PricingPage.jsx";
import Support from "./landing_page/support/Support.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx"
import NavBar from './landing_page/NavBar.jsx';
import Footer from './landing_page/Footer.jsx';
import Login from '../Login.jsx';


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <NavBar/>
 <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/about' element={<AboutPage/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/pricing' element={<PricingPage/>}/>
<Route path='/products' element={<ProductPage/>}/>
<Route path='/support' element={<Support/>}/>
</Routes>
 <Footer/>
 </BrowserRouter>
)
