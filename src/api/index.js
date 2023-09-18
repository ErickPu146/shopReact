import axios from "axios";

const getToken = () => {
  const token = JSON.parse(localStorage.getItem("TOKENLOGGER"));
  return token;
};

export const getAll = async (location) => {
  const token = getToken();
  try {
    const { data } = await axios.get(`http://localhost:4000/${location}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const getOne = async (location, id) => {
  const token = getToken();

  try {
    const { data } = await axios.get(
      `http://localhost:4000/${location}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.error(error.response.data);
    return {};
  }
};

export const deleteOne = async (location, id) => {
  const token = getToken();

  try {
    await axios.delete(`http://localhost:4000/${location}/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newData = await getAll(location);
    return newData;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

export const createOne = async (location, data) => {
  const token = getToken();

  try {
    await axios.post(`http://localhost:4000/${location}/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newData = await getAll(location);
    return newData;
  } catch (error) {
    console.error(error.message);
    return error.response.data;
  }
};

export const editOne = async (location, id, data) => {
  const token = getToken();

  try {
    await axios.patch(`http://localhost:4000/${location}/edit/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newData = await getAll(location);
    return newData;
  } catch (error) {
    console.error(error.message);
    return error.response.data;
  }
};

export const registerOneUser = async (location, data) => {
  try {
    const result = await axios.post(
      `http://localhost:4000/${location}/create`,
      data
    );
    return result.data;
  } catch (error) {
    console.error(error.message);
    return error.response.data;
  }
};

export const loginUser = async (data) => {
  try {
    const result = await axios.post(`http://localhost:4000/login/auth`, data);
    return result.data;
  } catch (error) {
    console.error(error.message);
    return error.response.data;
  }
};
