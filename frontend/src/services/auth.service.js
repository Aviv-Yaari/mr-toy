import Axios from 'axios';
import { storageService } from './storage.service';
const axios = Axios.create({
  withCredentials: true,
});
export const authService = { signup, login, logout, loadFromStorage };

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/auth' : 'http://localhost:3030/api/auth';

async function signup(user) {
  const res = await axios.post(BASE_URL + '/signup', { user });
  _saveToStorage(res.data);
  return res.data;
}

async function login(email, password) {
  const res = await axios.post(BASE_URL + '/login', { email, password });
  _saveToStorage(res.data);
  return res.data;
}

async function logout() {
  await axios.post(BASE_URL + '/logout');
  _removeFromStorage();
}

function loadFromStorage() {
  return storageService.loadFromStorage('user');
}

function _saveToStorage(data) {
  storageService.saveToStorage('user', data);
}

function _removeFromStorage() {
  storageService.removeFromStorage('user');
}
