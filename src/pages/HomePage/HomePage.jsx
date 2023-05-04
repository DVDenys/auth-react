import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "store/slices/userSlice";

import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className="home-page">
      <h1 className="home-page__title">Welcome</h1>

      <button className="home-page__button" onClick={() => dispatch(removeUser())}>
        {" "}
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
