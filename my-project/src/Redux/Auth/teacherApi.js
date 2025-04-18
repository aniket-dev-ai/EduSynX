import API from "./AuthApi";

 

// Create Teacher
export const createTeacher = async (teacherData) => {
  const response = await API.post('/teacher/create', teacherData);
  return response.data;
};

// Get All Teachers
export const getAllTeachers = async () => {
  const response = await API.get('/teacher/getAllTeachers');
  return response.data;
};
