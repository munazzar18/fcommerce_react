import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const user = AuthService.getUser();
  const userRole = user?.role;
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "seller") {
      navigate("/");
    }
  }, [userRole]);

  return children;
};

export default ProtectedRoutes;
