import useAuthStatus from "../hooks/useAuthStatus";
import { Outlet } from "react-router-dom";
import SignIn from "../pages/SignIn";

const PrivateRoute = () => {
  const {loggedIn, checkingStatus} = useAuthStatus()

  if(checkingStatus){
      return <h3>Loading...</h3>
  }

  return loggedIn ? <Outlet /> : <SignIn />;
};

export default PrivateRoute;
