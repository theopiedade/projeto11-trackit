import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from "./pages/Homepage/HomePage"
import Cadastro from "./pages/Cadastro/Cadastro"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

      <NavContainer>CINEFLEX</NavContainer>

      <Routes>

      <Route path='/' element={  <HomePage /> } />
      <Route path='/cadastro element={ <Cadastro/> } />
      <Route path='/assentos/:idSession' element={<SeatsPage />} />
      <Route path='/sucesso' element={<SuccessPage />} />

      </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
