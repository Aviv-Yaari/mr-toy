const bcrypt = require('bcrypt');
const userService = require('../user/user.service');
const logger = require('../../services/logger.service');

async function login(email, password) {
  logger.debug(`auth.service - login with username: ${email}`);
  const user = await userService.getByEmail(email);
  if (!user) return Promise.reject('Invalid username or password');
  const match = await bcrypt.compare(password, user.password);
  if (!match) return Promise.reject('Invalid username or password');
  delete user.password;
  return user;
}

async function signup(user) {
  const { firstName, lastName, email, password } = user;
  const saltRounds = 10;
  logger.debug(`auth.service - signup with email: ${email}`);
  if (!email || !password || !firstName || !lastName)
    return Promise.reject('Full name, email and password are required!');
  const hash = await bcrypt.hash(password, saltRounds);
  user.password = hash;
  return userService.add(user);
}

module.exports = {
  signup,
  login,
};
