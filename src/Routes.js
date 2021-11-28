import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Bairros from './pages/Bairros'

const listRoutes = () => {
    return (
      <Routes> 
          <Route path='/' element={<Home/>}/>
          
          <Route path='/bairros' element={<Bairros/>}/>
      </Routes> 
    );
};

export default listRoutes