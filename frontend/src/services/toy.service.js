import axios from 'axios';

export const toyService = {
  getToys,
  getToyById,
  create,
  remove,
  update,
  getLabels,
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
