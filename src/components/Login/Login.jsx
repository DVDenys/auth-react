import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "components/Form";
import { setUser } from "store/slices/userSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        alert(`Error. ${error.code}`)
      });
  };

  return <Form title="login" handleClick={handleLogin} />;
};

export default Login;
