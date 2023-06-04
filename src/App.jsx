import { useState } from 'react'
import axios from 'axios';
import Context from "./Context"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/Homepage/HomePage";
import Cadastro from "./pages/Cadastro/Cadastro";
import Hoje from "./pages/Hoje/Hoje";
import Habitos from "./pages/Habitos/Habitos";
import Historico from "./pages/Historico/Historico";


export default function App() {

  const [userLogged, setUserLogged] = useState("");
  const [daylyProgress, setDaylyProgress] = useState("");

  axios.defaults.headers.common['Authorization'] = 'gKRxLmMLBYEInirlQ2e3FNVt';

  return (
    <>
    <Context.Provider user={userLogged} progress={daylyProgress}>
          <BrowserRouter>

                <Routes>

                  <Route path='/' element={  <HomePage /> } />
                  <Route path='/cadastro' element={  <Cadastro/> } />
                  <Route path='/hoje' element={  <Hoje/> } />
                  <Route path='/habitos' element={  <Habitos/> } />
                  <Route path='/habitos' element={  <Historico/> } />

                </Routes>

          </BrowserRouter>
    </Context.Provider>

    </>
  )
}