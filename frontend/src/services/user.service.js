import { storageService } from './storage.service';

export const userService = { getUser, updateUser };

let gUser = _loadUser() || {
  fullName: 'Puki Ben David',
  prefs: { color: '#000000', bgColor: '#ffffff' },
};

async function getUser() {
  return gUser;
}

async function updateUser(fullName, prefs) {
  gUser.fullName = fullName;
  gUser.prefs = prefs;
  _saveUser();
}

function _loadUser() {
  return storageService.loadFromStorage('user');
}

function _saveUser() {
  storageService.saveToStorage('user', gUser);
}
