import { createContext, useEffect, useReducer } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/app-constants";
import AuthService from "../services/auth.service";
import LocalUtils from "../utils/localUtils";
import jwtDecode from "jwt-decode";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },

  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },

  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  verity: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken =
          LocalUtils.get(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) || "";

        if (accessToken) {
          const user = jwtDecode(accessToken);
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (submitData) => {
    const { data } = await AuthService.login(submitData);

    LocalUtils.set(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, data.user.token);

    dispatch({
      type: "LOGIN",
      payload: {
        user: data.user,
      },
    });
  };

  const register = async (submitData) => {
    const { data } = await AuthService.register(submitData);
    console.log('data', data);

    // const response = await axios.post("/api/account/register", {
    //   email,
    //   password,
    //   firstName,
    //   lastName,
    // });
    // const { accessToken, user } = response.data;

    // LocalUtils.set(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    // dispatch({
    //   type: "REGISTER",
    //   payload: {
    //     user,
    //   },
    // });
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
