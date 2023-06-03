import Heading from '../src/Heading';
import Section from '../src/Section';
import styled from "styled-components"
import { useState } from 'react'
import HomePage from "./pages/Homepage/HomePage"
import Cadastro from "./pages/Cadastro/Cadastro"
import Hoje from "./pages/Hoje/Hoje"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';

export default function App() {

  axios.defaults.headers.common['Authorization'] = 'gKRxLmMLBYEInirlQ2e3FNVt';

  return (
    <>
      <BrowserRouter>

        <Routes>

        <Route path='/' element={  <HomePage /> } />
        <Route path='/cadastro' element={  <Cadastro/> } />
        <Route path='/hoje' element={  <Hoje/> } />


        </Routes>

      </BrowserRouter>

    </>
  )
}