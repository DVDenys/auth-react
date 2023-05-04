import { Link } from "react-router-dom";
import Login from "components/Login/Login";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="login-page__title">Login</h1>
      <Login />
      <p className="login-page__link">
        Not a member? <Link to="/register">Sign up now</Link>
      </p>
    </div>
  );
};

export default LoginPage;
