import { checkingCredentials, login, logout } from "./authSlice";
import { signIn } from "../../apis/auth";
import { getLSValue, setLSValue } from "../../helpers/customLocalStorage";

export const startSignIn = (userData) => {
  const user = getLSValue("user");
  return async (dispatch) => {
    dispatch(checkingCredentials());
    if (!user) {
      const result = await signIn(userData);
      if (!result.ok) {
        return dispatch(logout());
      }
      setLSValue("user", result.userDB);
      return dispatch(login(result.userDB));
    }
    return dispatch(login(user));
  };
};

export const startLogIn = (user) => {
  return async (dispatch) => {
    dispatch(login(user));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    setLSValue("user");
    dispatch(logout());
  };
};