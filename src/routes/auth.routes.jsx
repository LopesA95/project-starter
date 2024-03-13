import { Navigate, Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  const user = localStorage.getItem("@hellostarter:user");

  return (
    <Routes> {/* Definindo rotas */}
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      
      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
}
