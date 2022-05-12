import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

// sign up
const register = async (userName, email, password) => {
  return axios.post(API_URL + "signup", {
    userName,
    email,
    password,
  });
};

// log in
const login = async (userName, password) => {
  const response = await axios.post(API_URL + "signin", {
    userName,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// log out
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
