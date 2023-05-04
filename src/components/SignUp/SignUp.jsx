import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "components/Form/Form";
import { setUser } from "store/slices/userSlice";
import "./SignUp.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
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

  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
