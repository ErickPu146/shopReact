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
    console.error(error.response.data);
    return {};
  }
};

export const deleteOne = async (location, id) => {
  try {
    await axios.delete(`http://localhost:4000/${location}/delete/${id}`);
    const newData = await getAll(location);
    return newData;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

export const createOne = async (location, data) => {
  try {
    await axios.post(`http://localhost:4000/${location}/create`, data);
    const newData = await getAll(location);
    return newData;
  } catch (error) {
    console.error(error.message);
    return error.response.data;
  }
};

export const editOne = async (location, id, data) => {
  try {
    await axios.patch(`http://localhost:4000/${location}/edit/${id}`, data);
    const newData = await getAll(location);
    return newData;
  } catch (error) {
    console.error(error.message);
    return error.response.data;
  }
};
