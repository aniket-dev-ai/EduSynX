import API from "./AuthApi";

export const createInstitute = async (instituteData) => {
  const response = await API.post("/institute/create", instituteData);
  console.log(response.data);
  return response.data;
};

export const getInstitute = async () => {
  const response = await API.get("/institute/getInstitute");
//   console.log("response.data");
//   console.log(response.data);
  return response.data;
};

export const getInstituteByCode = async (code) => {
  const response = await API.get(`/institute/getInstitute/${code}`);
  console.log(response.data);
  return response.data;
};
