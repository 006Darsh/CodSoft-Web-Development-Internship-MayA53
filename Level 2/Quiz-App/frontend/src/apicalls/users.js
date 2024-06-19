import axiosInstance from ".";
const apiUrl = process.env.REACT_APP_BASE_URL;

export const registerUser = async (payload) => {
  try {
    console.log(payload);
    const response = await axiosInstance.post(
      `${apiUrl}/api/users/register`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/users/login`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/users/get-user-info`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
