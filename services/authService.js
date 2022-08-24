import axios from "axios";
import Cookies from "js-cookie";
import { setCookie } from "cookies-next";

const API_URL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/api/register`, userData);
  console.log(response);
  if (response.data) {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(response.data.data));
    }
    Cookies.set("bizpotta_token", response.data.access_token);
    setCookie("bizpotta_token", response.data.access_token, {
      path: "/",
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
    });
  }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "/api/login", userData);
  if (response.data) {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(response.data.data));
      Cookies.set("bizpotta_token", response.data.access_token);
      setCookie("bizpotta_token", response.data.access_token, {
        path: "/",
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      });
    }
  }
  return response.data;
};

// Logout user
const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};

// get token for localstorage and cookie
const getToken = () => {
  let token = Cookies.get("bizpotta_token");
  return token ? token : null;
};

// get user from localstorage or server
const getUser = () => {
  let user = null;
  if (typeof window !== "undefined" && window.localStorage.getItem("user")) {
    user = window.localStorage.getItem("user");
    return JSON.parse(user);
  }
  return user;
};

// get user from server
const getUserFromServer = async () => {
  const token = getToken();
  if (token) {
    const response = await axios.get(API_URL + "/api/user", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    if (response.data) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }
  }
  return null;
};
const authService = {
  register,
  logout,
  login,
  getToken,
  getUser,
  getUserFromServer,
};

export default authService;
