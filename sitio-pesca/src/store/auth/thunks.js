import { checkingCredentials, login, logout } from "./authSlice";
import { createUser, signIn } from "../../apis/auth";
import { getLSValue, setLSValue } from "../../helpers/customLocalStorage";

export const startSignIn = (userData) => {
  const user = getLSValue("user");
  return async (dispatch) => {
    dispatch(checkingCredentials());
    if (!user) {
      const result = await signIn(userData);
      const { msg } = result;
      if (!result.ok) {
        return dispatch(logout({ errorMsg: msg }));
      }
      setLSValue("user", result.userDB);
      return dispatch(login(result.userDB));
    }
    return dispatch(login(user));
  };
};

export const startLogIn = (user) => {
  return (dispatch) => {
    dispatch(login(user));
  };
};

export const startLogout = () => {
  return (dispatch) => {
    setLSValue("user");
    dispatch(logout());
  };
};

export const startClearErrorMessage = () => {
  return (dispatch) => {
    dispatch(logout({ errorMsg: null }));
  };
};

export const startRegisterUser = (userData) => {
  return async (dispatch) => {
    const result = await createUser(userData);
    const { msg } = result;
    if (!result.ok) {
      return dispatch(logout({ errorMsg: msg }));
    }
    setLSValue("user", result.usuario);
    return dispatch(login(result.usuario));
  };
};
