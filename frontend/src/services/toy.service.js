import axios from 'axios';

export const toyService = { getToys, getToyById, create, remove, update, getLabels };

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

async function getLabels() {
  return gLabels;
}

async function getToys(criteria, sort) {
  const res = await axios.get('http://localhost:3030/api/toy', {
    params: { criteria, sort },
  });
  return res.data;
}

async function getToyById(id) {
  const res = await axios.get(`http://localhost:3030/api/toy/${id}`);
  return res.data;
}

async function create(toy) {
  const res = await axios.post('http://localhost:3030/api/toy/', toy);
  return res.data;
}

async function remove(id) {
  const res = await axios.delete(`http://localhost:3030/api/toy/${id}`);
  return res.data;
}

async function update(toy) {
  const res = await axios.post('http://localhost:3030/api/toy/', toy);
  return res.data;
}
