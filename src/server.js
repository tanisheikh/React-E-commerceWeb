"http://localhost:4000/data";
import axios from "axios";

export const fetchData = async ({ signal }) => {
  const response = await axios.get("http://localhost:4000/data1", { signal });
  return response.data;
  //  window.history.back()
};

export const addData = async (addData) => {
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
