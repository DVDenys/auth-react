import { Link } from "react-router-dom";
import SignUp from "components/SignUp/SignUp";
import "./RegisterPage.css";


const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default RegisterPage;