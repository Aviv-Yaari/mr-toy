const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const toyService = require('./services/toy.service');
const userService = require('./services/user.service');
const session = require('express-session');
const path = require('path');
const PORT = process.env.PORT || 3030;

// settings

const app = express();
app.use(
  session({
    secret: 'some secret token',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static('public'));
app.get('/', (req, res) => res.send('Hello!'));
app.listen(PORT, () => console.log('Server ready at port', PORT));

// user mgmt

app.get('/api/user', async (req, res) => {
  const users = await userService.query();
  res.send(users);
});

app.get('/api/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);
  res.send(user);
});

app.delete('/api/user/:id', async (req, res) => {
  const { id } = req.params;
  const { loggedInUser } = req.session;
  if (!loggedInUser) return res.status(401).send('login first');
  if (!loggedInUser.isAdmin) return res.status(403).send('Not authorised to delete users');
  const users = await userService.remove(id);
  if (!users) return res.status(404).send('could not remove user');
  return res.send('deleted');
});

app.post('/api/user/signup', async (req, res) => {
  const { user } = req.body;
  const resUser = await userService.signup(user);
  res.send(resUser);
});

app.post('/api/user/login', async (req, res) => {
  const { username, password } = req.body;
  const resUser = await userService.checkLogin(username, password);
  if (!resUser) return res.status(401).send('Invalid username/password');
  req.session.loggedInUser = resUser;
  res.send(resUser);
});

app.post('/api/user/logout', async (req, res) => {
  req.session.destroy();
  res.send('Logged out.');
});

// toy

app.get('/api/toy/:id', async (req, res) => {
  const { id } = req.params;
  const toys = await toyService.query({ id });
  if (!toys || toys.length === 0) res.status(404).send('Toy not found');
  res.send(toys[0]);
});

app.get('/api/toy', async (req, res) => {
  let { criteria, sort } = req.query;
  if (criteria) criteria = JSON.parse(criteria);
  if (sort) sort = JSON.parse(sort);
  const toys = await toyService.query(criteria, sort);
  res.send(toys);
});

app.post('/api/toy', async (req, res) => {
  const toys = await toyService.save(req.body);
  res.send(toys);
});

app.delete('/api/toy/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const toys = await toyService.remove(id);
    res.send(toys);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
