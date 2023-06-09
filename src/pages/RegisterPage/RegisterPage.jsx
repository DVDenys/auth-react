import { Link } from "react-router-dom";
import SignUp from "components/SignUp/SignUp";
import "./RegisterPage.scss";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h1 className="register-page__title">Register</h1>
      <SignUp />
      <p className="register-page__link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
