"http://localhost:4000/data";
import axios from "axios";

export const fetchData = async (pageNumber) => {
  const url = `https://api.example.com/data?_limit=10&page=${pageNumber}`;

  const response = await axios.get(url);
  return response.data;
  //  window.history.back()
};

export const addData = async (addData) => {
  console.log("addData>>",addData)
  const response = await axios.post("http://localhost:4000/data", addData);
  return response.data;
};

export const updateData = async (postId, updatedD) => {
  const response = await axios.put(
    `http://localhost:4000/data/${postId}`,
    updatedD
  );
  console.log("response.data>>", response.data);
  return response.data;
};

export const deleteData = (id) => {
  return axios.delete(`http://localhost:4000/data/${id}`);
};
