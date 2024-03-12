import { createContext, useContext, useState, useEffect } from "react"; // Importando createContext, useContext, useState e useEffect do React

export const AuthContext = createContext({}); // Criando um contexto de autenticação

function AuthProvider({ children }) { // Componente para fornecer o contexto de autenticação
  const [data, setData] = useState({}); // Estado para armazenar dados de autenticação

  async function handleSignIn({ email, password }) { // Função para realizar login
    try {
      const response = await api.post("/sessions", { email, password }); // Requisição para o servidor para autenticação
      const { token, user } = response.data; // Obtendo token e dados do usuário a partir da resposta

      localStorage.setItem("@hellostarter:user", JSON.stringify(user)); // Salvando dados do usuário no localStorage
      localStorage.setItem("@hellostarter:token", token); // Salvando token de autenticação no localStorage

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Definindo token de autenticação nos headers padrão da API
      setData({ token, user }); // Atualizando dados de autenticação no estado

    } catch (error) { // Lidando com erros de autenticação
      if (error.response) { // Se houver resposta de erro
        alert(error.response.data.error); // Alertando o usuário sobre o erro de autenticação
      } else { // Se não houver resposta
        alert("Não foi possível acessar"); // Alertando o usuário sobre a impossibilidade de acessar
      }
    }
  }

  function signOut() { // Função para realizar logout
    localStorage.removeItem("@hellostarter:user"); // Removendo dados do usuário do localStorage
    localStorage.removeItem("@hellostarter:token"); // Removendo token de autenticação do localStorage

    api.defaults.headers.common.Authorization = ""; // Removendo token de autenticação dos headers padrão da API
    setData({}); // Limpando dados de autenticação no estado
  }

  useEffect(() => { // Efeito para verificar se há usuário autenticado ao montar o componente
    const token = localStorage.getItem("@hellostarter:token"); // Obtendo token de autenticação do localStorage
    const user = localStorage.getItem("@hellostarter:user"); // Obtendo dados do usuário do localStorage

    if (token && user) { // Se houver token e dados do usuário
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Definindo token de autenticação nos headers padrão da API
      setData({ // Atualizando dados de autenticação no estado
        token,
        user: JSON.parse(user)
      });
    }
  }, []); // Dependência vazia para garantir que o efeito seja executado apenas uma vez ao montar o componente

  return (
    <AuthContext.Provider value={{ // Fornecendo dados de autenticação através do contexto
      handleSignIn, // Função para realizar login
      signOut, // Função para realizar logout
      user: data.user // Dados do usuário autenticado
    }}>
      {children} {/* Renderizando os componentes filhos dentro do contexto de autenticação */}
    </AuthContext.Provider>
  )
}

function useAuth() { // Hook personalizado para acessar o contexto de autenticação
  const context = useContext(AuthContext); // Obtendo contexto de autenticação
  return context; // Retornando contexto de autenticação para uso nos componentes
}

export { AuthProvider, useAuth }; // Exportando AuthProvider e useAuth para uso em outros componentes
