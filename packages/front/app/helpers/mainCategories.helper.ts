import axios from "axios";

export const getAllMainCategories = async () => {
  const response = await axios.get("http://localhost:5000/main-category/all");
  return response.data;
};
