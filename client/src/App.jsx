import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/initials/HomePage'
import AuthPage from './pages/initials/AuthPage'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserHome from './pages/dasboard/DasboardPage';

function App() {


  return (
    <>
    <Routes>
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/dasboard' element={<UserHome/>} />

    </Routes>
    </>
  )
}

export default App
