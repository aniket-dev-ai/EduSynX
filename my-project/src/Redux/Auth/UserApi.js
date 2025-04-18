import API from "./AuthApi";

export const registerUser = async (userData) => {
  const response = await API.post("/user/create", userData);
  console.log(response.data);
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await API.post("/user/login", loginData);
  console.log(response.data);
  return response.data;
};
