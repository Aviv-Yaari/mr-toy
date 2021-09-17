import Axios from 'axios';
const axios = Axios.create({
  withCredentials: true,
});

export const reviewService = {
  getReviews,
  getReviewById,
  create,
  remove,
  update,
};

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/review' : 'http://localhost:3030/api/review';

async function getReviews(criteria, sort) {
  const res = await axios.get(BASE_URL, {
    params: { criteria, sort },
  });
  return res.data;
}

async function getReviewById(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
}

async function create(review) {
  const res = await axios.post(BASE_URL, review);
  return res.data;
}

async function remove(id) {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
}

async function update(review) {
  const res = await axios.put(`${BASE_URL}/${review._id}`, review);
  return res.data;
}
