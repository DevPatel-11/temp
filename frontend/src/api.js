import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
