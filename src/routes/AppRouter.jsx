import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landyn from '../views/Landyn';
import Login from '../views/Login';
import LandynAbout from '../views/LandynAbout';
import LandynContact from '../views/LandynContact';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landyn />} />
        <Route path='/about' element={<LandynAbout/>}/>
        <Route path='/contact' element={<LandynContact/>}/>
        <Route path="/login/:role" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter