import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
  const user = "farrahpepino";
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes