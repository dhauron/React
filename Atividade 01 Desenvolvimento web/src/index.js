import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import CadastrarMaterias from './pages/materias/CadastrarMaterias';
import CadastrarAlunos from './pages/alunos/CadastrarAlunos';
import MateriasListagem from './pages/materias/MateriasListagem';
import AlunosListagem from './pages/alunos/AlunosListagem';
import Navbar from './components/Navbar';
import Container from '@mui/material/Container';
import Home from './pages/Home';


const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cadastrar-materias", element: <CadastrarMaterias /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
    { path: "/listagem-materias", element: <MateriasListagem /> },
    { path: "/listagem-alunos", element: <AlunosListagem /> }
  ]);

  return routes;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="md">
        <Routes />
      </Container>
    </BrowserRouter>
    <div> &copy; 2021 - Grupo 1 
    </div>   
  </React.StrictMode>,
  document.getElementById('root')
);
