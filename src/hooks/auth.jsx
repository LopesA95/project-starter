import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function handleSignIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password }); o
      const { token, user } = response.data;

      localStorage.setItem("@hellostarter:user", JSON.stringify(user));
      localStorage.setItem("@hellostarter:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ token, user }); o

    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else { // Se não houver resposta
        alert("Não foi possível acessar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@hellostarter:user");
    localStorage.removeItem("@hellostarter:token");

    api.defaults.headers.common.Authorization = "";
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@hellostarter:token");
    const user = localStorage.getItem("@hellostarter:user");

    if (token && user) { // Se houver token e dados do usuário
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      handleSignIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
