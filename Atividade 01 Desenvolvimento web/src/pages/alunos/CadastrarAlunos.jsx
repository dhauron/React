import axios from "axios";
import { useState } from "react";
import { ButtonCadastro, Form, InputCadastro } from "../../components/Cadastros";
import { API_URL_ALUNOS } from "../../constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SendIcon from '@mui/icons-material/Send';

const CadastrarAlunos = () => {
  const MySwal = withReactContent(Swal);

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [cidade, setCidade] = useState();

  const cadastrarAlunos = () => {
    axios
      .post(API_URL_ALUNOS, {
        nome,
        idade,
        cidade,
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
    setNome("");
    setIdade("");
    setCidade("");
  };

  return (
    <Form>
      <InputCadastro
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <InputCadastro
        label="Idade"
        variant="outlined"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <InputCadastro
        label="Cidade"
        variant="outlined"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <ButtonCadastro variant="contained" onClick={cadastrarAlunos} endIcon={<SendIcon />}>
        Cadastrar
      </ButtonCadastro>
    </Form>
  );
};

export default CadastrarAlunos;
