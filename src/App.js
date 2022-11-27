import './App.css';
import React, { useEffect } from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Achievements from './pages/achievements/Achievements';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import MainCart from './pages/maincart/MainCart';
import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
  const {currentUser} = useSelector(state => state.user)
  const location = useLocation();
useEffect(() => {
  window.scrollTo(0,0);
}, [location]);
  
  return (
     <BrowserRouter>
    <div className='App'>
      <Navbar/>
       <Routes>      
         <Route  exact path='/' element={ <Home/>}/>  
         <Route path='/services' element={<Services/>}/>
         <Route   path='/products/:1d' element={ currentUser? <Cart/> : <Home/>}/>  
         <Route   path='/about' element={ <About/>}/>  
         <Route   path='/achievements' element={ <Achievements/>}/>  
         <Route   path='/cart/:id' element={  currentUser? <MainCart/> : <Home/>}/>  
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
