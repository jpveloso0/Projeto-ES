import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Bairros from './pages/Bairros'
import Ruas from './pages/Ruas'

const listRoutes = () => {
    return (
      <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/bairros/:de&:ate' element={<Bairros/>}/>

          <Route path='/ruas/:bairro' element={<Ruas/>}/>
      </Routes>
    );
};

export default listRoutes
