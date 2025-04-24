import API from "./AuthApi";

 

// 🌟 Create Course
export const createCourse = async (instituteId, courseData) => {
  const response = await API.post(`/course/create/${instituteId}`, courseData);
  return response.data;
};

// 📚 Get All Courses of an Institute
export const getAllCourses = async (instituteId) => {
  const response = await API.get(`/course/getAllCourses/${instituteId}`);
  return response.data;
};
