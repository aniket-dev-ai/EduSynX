import API from "./AuthApi";

// 📦 Create Module
export const createModule = async (courseId, ModuleName) => {
    console.log("Creating module with courseId:", courseId, "and ModuleName:", ModuleName);
  const response = await API.post(`/module/create/${courseId}`, {ModuleName});
  return response.data;
};
