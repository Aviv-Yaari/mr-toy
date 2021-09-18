import Axios from 'axios';
const axios = Axios.create({
  withCredentials: true,
});

export const userService = {
  getUserById,
};

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/user' : 'http://localhost:3030/api/user';

async function getUserById(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
}
