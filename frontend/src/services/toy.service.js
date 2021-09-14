import Axios from 'axios';
const axios = Axios.create({
  withCredentials: true,
});

export const toyService = {
  getToys,
  getToyById,
  create,
  remove,
  update,
  getAllLabels,
  getToysLabelMap,
  getToysYearMap,
};

let gLabels = [
  'On wheels',
  'Box game',
  'Battery Powered',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
];

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/toy' : 'http://localhost:3030/api/toy';

function getAllLabels() {
  return gLabels;
}

async function getToys(criteria, sort) {
  const res = await axios.get(BASE_URL, {
    params: { criteria, sort },
  });
  return res.data;
}

async function getToyById(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
}

async function create(toy) {
  const res = await axios.post(BASE_URL, toy);
  return res.data;
}

async function remove(id) {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
}

async function update(toy) {
  const res = await axios.put(`${BASE_URL}/${toy._id}`, toy);
  return res.data;
}

function getToysLabelMap(toys) {
  const res = toys.reduce((map, toy) => {
    toy.labels.forEach(label => {
      if (map.hasOwnProperty(label)) map[label]++;
      else map[label] = 1;
    });
    return map;
  }, {});
  return res;
}

function getToysYearMap(toys) {
  const res = toys.reduce((map, toy) => {
    const year = new Date(toy.createdAt).getFullYear();
    if (map.hasOwnProperty(year)) map[year]++;
    else map[year] = 1;
    return map;
  }, {});
  return res;
}
