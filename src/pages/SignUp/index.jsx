import { useState } from 'react'; // Importando o hook useState do React
import { Link, useNavigate } from 'react-router-dom'; // Importando Link e useNavigate do react-router-dom para navegação
import { Button } from '../../components/Button/input'; // Importando o componente Button
import { Input } from '../../components/Input'; // Importando o componente Input
import { Container, Form } from './styles'; // Importando componentes estilizados para estilização

export function SignUp() { // Componente funcional SignUp
  const [name, setName] = useState(""); // Variável de estado para o campo de nome
  const [email, setEmail] = useState(""); // Variável de estado para o campo de email
  const [password, setPassword] = useState(""); // Variável de estado para o campo de senha

  const navigate = useNavigate(); // Função para navegar para diferentes rotas

  // Função para lidar com o cadastro
  function handleSingnUp() {
    // Verifica se algum campo está vazio
    if (!name || !email || !password) {
      // Alerta o usuário para preencher todos os campos
      alert("Preencha todos os campos");
    }
    // Envia requisição POST para criar usuário
    api.post("/users", { name, email, password })
      .then(() => { // Lidando com a resposta bem-sucedida
        // Alerta o usuário sobre o cadastro bem-sucedido
        alert("Usuário cadastrado com sucesso");
        // Navega para a página inicial após o cadastro bem-sucedido
        navigate("/");
      })
      .catch(error => { // Lidando com os erros
        // Se houver resposta de erro
        if (error.response) {
          // Alerta o usuário com a mensagem de erro da resposta da API
          alert(error.response.data.error);
        } else { // Se não houver resposta
          // Alerta o usuário sobre a falha no cadastro
          alert("Não foi possível cadastrar o usuário");
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>Hello Starter</h1>
        <p>Faça seu cadastro</p>
        <Input // Campo de entrada para o nome
          type="text"
          placeholder="Nome"
          // Define o estado do nome na mudança
          onChange={(e) => setName(e.target.value)}
        />
        <Input // Campo de entrada para o email
          type="text"
          placeholder="Email"
          // Define o estado do email na mudança
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input // Campo de entrada para a senha
          type="password"
          placeholder="Senha"
          // Define o estado da senha na mudança
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button // Botão para cadastrar
          title="Cadastrar"
          // Chama a função handleSignUp ao clicar
          onClick={handleSingnUp}
        />
        <Link to="/">Ir para o login</Link>
      </Form>
    </Container>
  )
}
