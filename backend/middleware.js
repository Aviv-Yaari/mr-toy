const toyService = require('./services/toy.service');
module.exports = { checkAuth };

async function checkAuth(req, res, next) {
  const { loggedInUser } = req.session;
  const toyId = req.params.id || req.body._id;
  if (!loggedInUser) return res.status(403).send('Login first');
  if (!toyId) return next();
  if (loggedInUser.isAdmin) return next();
  const toy = await toyService.findById(toyId);
  if (toy.creator._id !== loggedInUser._id)
    return res.status(403).send('You are not the toy owner.');
  next();
}
