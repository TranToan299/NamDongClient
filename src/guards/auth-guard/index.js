import useAuth from "../../hooks/useAuth";
import Home from "../../pages";

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Home />;
  }

  return <>{children}</>;
}
