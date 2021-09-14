export const storageService = { saveToStorage, loadFromStorage, removeFromStorage };

function saveToStorage(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}

function loadFromStorage(key) {
  let data = sessionStorage.getItem(key);
  if (data) data = JSON.parse(data);
  return data;
}

function removeFromStorage(key) {
  sessionStorage.removeItem(key);
}
