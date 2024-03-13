import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Container, Form } from './styles';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleSingnUp() {

    if (!name || !email || !password) {

      alert("Preencha todos os campos");
    }
    o
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");

        navigate("/");
      })
      .catch(error => {

        if (error.response) {

          alert(error.response.data.error);
        } else {

          alert("Não foi possível cadastrar o usuário");
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>Hello Starter</h1>
        <p>Faça seu cadastro</p>
        <Input
          type="text"
          placeholder="Nome"

          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"

          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"

          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          title="Cadastrar"

          onClick={handleSingnUp}
        />
        <Link to="/">Ir para o login</Link>
      </Form>
    </Container>
  )
}
