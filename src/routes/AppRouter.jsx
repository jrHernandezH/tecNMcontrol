import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landyn from '../views/Landyn';
import Login from '../views/Login';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landyn />} />
        <Route path="/login/:role" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter