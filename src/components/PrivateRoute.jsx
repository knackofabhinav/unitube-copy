import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const PrivateRoute = ({ path, ...props }) => {
  const { login } = useAuth();
  return login ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
