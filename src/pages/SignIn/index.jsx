import { Link } from 'react-router-dom'; // Importando Link do react-router-dom para navegação
import { Button } from '../../components/Button/input'; // Importando o componente Button
import { Input } from '../../components/Input'; // Importando o componente Input
import { Container, Form } from "./styles"; // Importando componentes estilizados para estilização
import { useState } from 'react'; // Importando o hook useState do React
import { useAuth } from "../../hooks/auth"; // Importando o hook useAuth para autenticação

export function SignIn() { // Componente funcional SignIn
  const [email, setEmail] = useState(""); // Variável de estado para o campo de email
  const [password, setPassword] = useState(""); // Variável de estado para o campo de senha

  const { SignIn } = useAuth(); // Utilizando o hook useAuth para autenticação

  function handleSignIn(){ // Função para lidar com o login
    SignIn(email, password); // Chama a função SignIn do hook useAuth passando email e senha como argumentos
  }

  return (
    <Container>
      <Form>
        <h1>Hello Starter </h1>
        <h2>Faça seu login</h2>
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} // Define o estado do email na mudança
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)} // Define o estado da senha na mudança
        />
        <Button title="Entrar" onClick={handleSignIn}/>
        <Link to="/register">Criar Conta</Link> {/* Link para navegar para a página de registro */}
      </Form>
    </Container>
  )
}
