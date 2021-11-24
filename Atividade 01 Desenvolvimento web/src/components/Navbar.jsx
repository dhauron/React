import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="center"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              Home
            </IconButton>
            </Link>
          <Link to="/listagem-alunos">
            <Button color="inherit" edge="center">Listagem de Alunos</Button>
          </Link>
          <Link to="/cadastrar-alunos">
            <Button color="inherit" edge="center">Cadastro de Alunos</Button>
          </Link>
          <Link to="/listagem-materias">
            <Button color="inherit" edge="center">Listagem de Matéria</Button>
          </Link>
          <Link to="/cadastrar-materias">
            <Button color="inherit" edge="center">Cadastro de Matéria</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
