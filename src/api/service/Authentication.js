import EDESA_API from "../index";

const login = (payload) => {
  return EDESA_API.post("/auth/login", payload);
};

const signup = (payload) => {
  EDESA_API.post("/auth/register", payload);
};

const logout = () => {
  // const access_token = localStorage.getItem("jwt");
  localStorage.removeItem("jwt");
  localStorage.removeItem("userProfile");
  localStorage.removeItem("role");

  // EDESA_API.delete("/logout", {
  //   data: { access_token },
  // });
};

export { login, signup, logout };
