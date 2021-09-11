const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const gUsers = require('../data/users.json');
module.exports = { query, checkLogin, signup, findById, remove };

//

async function query() {
  return gUsers;
}

async function checkLogin(username, password) {
  const user = gUsers.find(user => user.username === username && user.password === password);
  if (!user) return null;
  return _getUserWithoutPassword(user);
}

async function signup(user) {
  user._id = uuidv4();
  gUsers.push(user);
  await _saveToFile();
  return _getUserWithoutPassword(user);
}

function _saveToFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile('data/users.json', JSON.stringify(gUsers, null, 2), err => {
      if (err) return reject(err);
      resolve();
    });
  });
}

async function findById(id) {
  const user = gUsers.find(user => user._id === id);
  return _getUserWithoutPassword(user);
}

function _getUserWithoutPassword(user) {
  const res = { ...user };
  delete res.password;
  return res;
}

async function remove(id) {
  const idx = gUsers.findIndex(user => user._id === id);
  if (idx === -1) return null;
  gUsers.splice(idx, 1);
  await _saveToFile();
  return gUsers;
}

// async function update(user) {
//   const idx = gUsers.findIndex(currUser => currUser._id === user._id);
//   if (idx === -1) throw new Error('User not found.');
//   gUsers[idx] = user;
// }
