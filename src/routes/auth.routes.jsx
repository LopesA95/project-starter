import { Navigate, Route, Routes } from 'react-router-dom'; // Importando Navigate, Route e Routes do react-router-dom para configuração de rotas
import { SignIn } from '../pages/SignIn'; // Importando o componente SignIn
import { SignUp } from '../pages/SignUp'; // Importando o componente SignUp

export function AuthRoutes() { // Componente AuthRoutes para rotas de autenticação
  const user = localStorage.getItem("@hellostarter:user"); // Obtendo usuário do localStorage

  return (
    <Routes> {/* Definindo rotas */}
      <Route path="/" element={<SignIn />} /> {/* Rota para o componente SignIn */}
      <Route path="/register" element={<SignUp />} /> {/* Rota para o componente SignUp */}

      {/* Se não houver usuário, redireciona para a página de login */}
      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
}
