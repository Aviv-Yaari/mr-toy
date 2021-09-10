import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

export const toyService = { getToys, create, remove, update, getLabels };

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
let gToys = [
  {
    _id: 't101',
    name: 'Talking Doll',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat sint \
          quisquam explicabo repellendus iste, fugit qui maxime aut id autem ex praesentium unde \
          dolorem adipisci velit blanditiis modi consequuntur!`,
    price: 123,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: 1631031801011,
    inStock: true,
    reviews: [],
  },
  {
    _id: 't102',
    name: 'Haha Doll',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat sint \
          quisquam explicabo repellendus iste, fugit qui maxime aut id autem ex praesentium unde \
          dolorem adipisci velit blanditiis modi consequuntur!`,
    price: 123,
    labels: ['Battery Powered', 'Baby'],
    createdAt: 1631030801011,
    inStock: false,
    reviews: [
      {
        _id: 'r101',
        author: 'aviv',
        createdAt: 1631030801011,
        title: 'Nice',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat sint \
          quisquam explicabo repellendus iste, fugit qui maxime aut id autem ex praesentium unde \
          dolorem adipisci velit blanditiis modi consequuntur!`,
      },
      {
        _id: 'r102',
        author: 'haviiv',
        createdAt: 1611010801011,
        title: 'Bad',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat sint \
          quisquam explicabo repellendus iste, fugit qui maxime aut id autem ex praesentium unde \
          dolorem adipisci velit blanditiis modi consequuntur!`,
      },
    ],
  },
  {
    _id: 't103',
    name: 'Talking Paul',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat sint
          quisquam explicabo repellendus iste, fugit qui maxime aut id autem ex praesentium unde
          dolorem adipisci velit blanditiis modi consequuntur!`,
    price: 123,
    labels: ['Doll', 'Baby'],
    createdAt: 1631021801011,
    inStock: true,
    reviews: [],
  },
];

async function getLabels() {
  return gLabels;
}

async function getToys(filter) {
  const { name, id, inStock = 'all', labels = [] } = filter;
  const res = gToys.filter(
    toy =>
      (inStock === 'all' || toy.inStock === inStock) &&
      (!labels.length || labels.every(label => toy.labels.includes(label))) &&
      (!name || toy.name.toLowerCase().includes(name.toLowerCase())) &&
      (!id || toy._id === id)
  );
  console.log('res', res);
  return res;
}

async function create(toy) {
  const resToy = _.cloneDeep(toy);
  resToy._id = uuidv4();
  resToy.status = 'active';
  gToys.unshift(resToy);
  return resToy;
}

async function remove(id) {
  const idx = gToys.findIndex(toy => toy._id === id);
  gToys.splice(idx, 1);
  return gToys;
}

async function update(id, data) {
  const idx = gToys.findIndex(toy => toy._id === id);
  if (idx === -1) return null;
  gToys[idx] = { ...gToys[idx], ...data };
  return gToys;
}
