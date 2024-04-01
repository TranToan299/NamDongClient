import { postAsync } from "./http.service";

const AuthService = {
  login: async (data) => {
    return await postAsync("/user/login", data);
  },

  register: async (data) => {
    return await postAsync("/user/signUp", data);
  },
};
export default AuthService;
