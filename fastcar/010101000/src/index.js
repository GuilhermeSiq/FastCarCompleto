import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-confirm-alert/src/react-confirm-alert.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/login';
import Agendamento from './pages/agendamento';
import Tabela from './pages/tabela';
import Feed from './pages/feed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/agendamento' element={<Agendamento />} />
      <Route path='/alterar/:idparams' element={<Agendamento/>} />
      <Route path='/tabela' element={<Tabela />} />
      <Route path='/feed' element={<Feed />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


