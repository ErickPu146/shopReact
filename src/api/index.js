import axios from "axios";

export const getAll = async (location) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/${location}/`);
    return data.data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const getOne = async (location, id) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/${location}/${id}`);
    return data.data;
  } catch (error) {
    console.error(error.message);
    return {};
  }
};
