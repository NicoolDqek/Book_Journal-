import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

function App() {


  return (
    <>
    <Routes>
        <Route path='/' element={<AuthPage/>} />
    </Routes>
    </>
  )
}

export default App
