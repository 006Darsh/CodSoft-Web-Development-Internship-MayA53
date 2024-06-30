import axiosInstance from ".";
const apiUrl = process.env.REACT_APP_BASE_URL;

export const addReport = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/reports/addReport`,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);

    return error.response.data;
  }
};

export const getAllAttempts = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/reports/getAllAttempts`,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);

    return error.response.data;
  }
};

export const getAllAttemptsByUser = async () => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/api/reports/getAllAttemptsByUser`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);

    return error.response.data;
  }
};
