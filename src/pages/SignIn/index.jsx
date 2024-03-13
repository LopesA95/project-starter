import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/input';
import { Input } from '../../components/Input';
import { useAuth } from "../../hooks/auth";
import { Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { SignIn } = useAuth();

  function handleSignIn() {
    SignIn(email, password);
  }

  return (
    <Container>
      <Form>
        <h1>Hello Starter </h1>
        <h2>Faça seu login</h2>
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
        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar Conta</Link>
      </Form>
    </Container>
  )
}
