import { createContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import * as Authentication from "../api/service/Authentication";

const INITIAL_STATE = {
  profile: {},
  authenticated: false,
  loading: false,
};

const authReducer = (authUserState, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN": {
      return {
        ...authUserState,
        user: action.user,
      };
    }

    case "SET_AUTHENTICATION": {
      return {
        ...authUserState,
        authenticated: action.authenticated,
      };
    }

    case "SET_USER_PROFILE": {
      return {
        ...authUserState,
        profile: action.userProfile,
      };
    }

    case "SET_ROLE": {
      return {
        ...authUserState,
        role: action.role,
      };
    }

    case "SET_LOADING": {
      return {
        ...authUserState,
        loading: action.loading,
      };
    }

    default: {
      return authUserState;
    }
  }
};

export const AuthUserContext = createContext();

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-primary px-4",
  },
  buttonsStyling: false,
});

const AuthUserContextProvider = ({ children }) => {
  const [authUserState, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const history = useHistory();
  useEffect(() => {
    if (!authUserState.authenticated) {
      localStorage.removeItem("access_token");
    }
  }, [authUserState.authenticated]);

  const Login = async (loginForm) => {
    try {
      dispatch({
        type: "SET_LOADING",
        loading: true,
      });

      let {
        data: { data },
      } = await Authentication.login(loginForm);

      const { token, username, user_grup, email, desa_id, id } = data;

      const accessToken = token;

      // CHANGE PROPERTY NAME OF USER_GRUP TO ROLE
      const userProfile = { username, email, role: user_grup, desa_id, id };

      setUserLoginInformation(accessToken, userProfile);

      setUserLoginPath(user_grup);

      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    } catch (error) {
      let errorCode = JSON.stringify(error);

      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      swalWithBootstrapButtons.fire({
        title: `<p style={{fontSize:16}}>${
          JSON.parse(errorCode).status === 404 ? "Salah NIK atau Password" : "Server Error"
        }</p>`,
        icon: "error",
        confirmButtonText: "Konfirmasi",
      });
      throw error;
    }
  };

  const setUserLoginPath = (role) => {
    if (!role) return;
    let rolePath = role.toLowerCase().split(" ").join("-");
    localStorage.setItem("role", rolePath);
    history.push(`/${rolePath}/dashboard`);
    window.location.reload();
  };

  const setUserLoginInformation = (accessToken, userProfile) => {
    localStorage.setItem("jwt", accessToken);

    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    dispatch({
      type: "SET_USER_PROFILE",
      userProfile,
    });
    dispatch({
      type: "SET_AUTHENTICATION",
      authenticated: true,
    });
  };

  const Logout = () => {
    try {
      dispatch({
        type: "SET_LOADING",
        loading: true,
      });

      // should -> remove item on access token if it's necessary
      Authentication.logout();
      dispatch({
        type: "SET_AUTHENTICATION",
        authenticated: false,
      });
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
      throw error;
    }
  };

  return <AuthUserContext.Provider value={{ authUserState, Login, Logout }}>{children}</AuthUserContext.Provider>;
};

export default AuthUserContextProvider;
