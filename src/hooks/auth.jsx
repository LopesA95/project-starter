import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function handleSignIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@hellostarter:user", JSON.stringify(user));
      localStorage.setItem("@hellostarter:token", token);

      api.default.headers.commom['Authorization'] = `Bearer ${token}`;
      setData({ token, user });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("Não foi possivel acessar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@hellostarter:user");
    localStorage.removeItem("@hellostarter:token");

    api.default.headers.Authorization = "";
    setData({});
  }
  useEffect(() => {
    const token = localStorage.getItem("@hellostarter:token");
    const user = localStorage.getItem("@hellostarter:user");

    if (token && user) {
      api.default.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
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