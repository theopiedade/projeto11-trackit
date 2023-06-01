import styled from "styled-components"
import { useState } from 'react'
import HomePage from "./pages/Homepage/HomePage"
import Cadastro from "./pages/Cadastro/Cadastro"
import Habitos from "./pages/Habitos/Habitos"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

      <Routes>

      <Route path='/' element={  <HomePage /> } />

      <Route path='/cadastro' element={  <Cadastro/> } />

      <Route path='/habitos' element={  <Habitos/> } />


      </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
