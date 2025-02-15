import React from 'react'
import { NavTab } from './Components'
import { 
  Home, 
  Login, 
  Register 
 } from './Pages'
import { Routes, Route, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation();
  const hideNav = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      {!hideNav && <NavTab />}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App