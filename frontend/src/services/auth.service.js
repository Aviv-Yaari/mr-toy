import Axios from 'axios';
import { socketService } from './socket.service';
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
  _connectUserToSocket(res.data._id);
  return res.data;
}

async function login(email, password) {
  const res = await axios.post(BASE_URL + '/login', { email, password });
  _saveToStorage(res.data);
  _connectUserToSocket(res.data._id);
  return res.data;
}

async function logout() {
  await axios.post(BASE_URL + '/logout');
  _disconnectUserFromSocket();
  _removeFromStorage();
}

function loadFromStorage() {
  const user = storageService.loadFromStorage('user');
  if (user?.id) _connectUserToSocket(user.id);
  else _disconnectUserFromSocket();
  return user;
}

function _saveToStorage(data) {
  storageService.saveToStorage('user', data);
}

function _removeFromStorage() {
  storageService.removeFromStorage('user');
}

function _connectUserToSocket(userId) {
  socketService.setup();
  socketService.emit('set-user-socket', userId);
}

function _disconnectUserFromSocket() {
  socketService.emit('unset-user-socket');
}
