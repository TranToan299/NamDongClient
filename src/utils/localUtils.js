import { LOCAL_STORAGE_KEYS } from "../constants/app-constants";

const LocalUtils = {
  get(key) {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },

  set(key, value) {
    localStorage.setItem(key, value);
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
    sessionStorage.clear();
  },

  setToken(token) {
    sessionStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, token);
  },

  getToken() {
    return sessionStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  },
};

export default LocalUtils;
