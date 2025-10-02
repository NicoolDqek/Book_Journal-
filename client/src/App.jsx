import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/initials/HomePage'
import AuthPage from './pages/initials/AuthPage'

function App() {


  return (
    <>
    <Routes>
        <Route path='/' element={<AuthPage/>} />
        <Route path='/home' element={<HomePage/>} />

    </Routes>
    </>
  )
}

export default App
