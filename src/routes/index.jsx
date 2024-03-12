import { BrowserRouter } from "react-router-dom"; // Importando BrowserRouter para configuração de rotas
import { AuthRoutes } from "./auth.routes"; // Importando AuthRoutes para as rotas de autenticação

export function Routes() { // Componente para definir as rotas principais da aplicação

  return (
    <BrowserRouter> {/* Utilizando BrowserRouter para definir o roteamento baseado em navegação do lado do cliente */}
      <AuthRoutes /> {/* Renderizando as rotas de autenticação dentro do BrowserRouter */}
    </BrowserRouter>
  )
}
