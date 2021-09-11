const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const gToys = require('../data/toys.json');
module.exports = { query, save, remove };

//
async function query(criteria, sort) {
  const { name, id, inStock = 'all', labels = [] } = criteria;
  let res = gToys.filter(
    toy =>
      (inStock === 'all' || toy.inStock === inStock) &&
      (!labels.length || labels.every(label => toy.labels.includes(label))) &&
      (!name || toy.name.toLowerCase().includes(name.toLowerCase())) &&
      (!id || toy._id === id)
  );
  if (sort) res = res.sort((a, b) => (a[sort.field] < b[sort.field] ? sort.type : sort.type * -1));
  return res;
}

async function save(toy) {
  // update:
  if (toy._id) {
    const idx = gToys.findIndex(currToy => currToy._id === toy._id);
    gToys[idx] = toy;
  }
  // create:
  else {
    const { labels = [] } = toy;
    gToys.push({ _id: uuidv4(), ...toy, createdAt: Date.now(), reviews: [], labels });
  }
  await _saveToFile();
  return gToys;
}

async function remove(id) {
  const idx = gToys.findIndex(toy => toy._id === id);
  if (idx === -1) throw new Error('Toy not found.');
  gToys.splice(idx, 1);
  await _saveToFile();
  return gToys;
}

function _saveToFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile('data/toys.json', JSON.stringify(gToys, null, 2), err => {
      if (err) return reject(err);
      resolve();
    });
  });
}
