import axios from "axios";
import { useState } from "react";
import { ButtonCadastro, Form, InputCadastro } from "../../components/Cadastros";
import { API_URL_MATERIAS } from "../../constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SendIcon from '@mui/icons-material/Send';

const CadastrarMaterias = () => {
  const MySwal = withReactContent(Swal);

  const [titulo, setTitulo] = useState();
  const [professor_nome, setProfessor_Nome] = useState();

  const cadastrarMaterias = () => {
    axios
      .post(API_URL_MATERIAS, {
        titulo,
        professor_nome,
      })
      .then((response) => {
        if (response.status === 201) {
          MySwal.fire(<p>{response?.data?.message}</p>);
          limparCampos();
        }
      }).catch(error => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
      });
  };

  const limparCampos = () => {
    setTitulo("");
    setProfessor_Nome("");
  };

  return (
    <Form>
      <InputCadastro
        label="Título"
        variant="outlined"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <InputCadastro
        label="Professor(a)"
        variant="outlined"
        value={professor_nome}
        onChange={(e) => setProfessor_Nome(e.target.value)}
      />

      <ButtonCadastro variant="contained" onClick={cadastrarMaterias} endIcon={<SendIcon />}>
        Cadastrar
      </ButtonCadastro>
    </Form>
  );
};

export default CadastrarMaterias;
