import axios from "axios";

export const createCerita = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/story`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response) {
      return response;
    }
  } catch (error) {
    throw new Error("Terjadi kesalahan. Silakan coba lagi.", error);
  }
};

export const getAllCerita = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/story/
        `);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
