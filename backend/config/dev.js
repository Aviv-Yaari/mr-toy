module.exports = {
  // dbURL: 'mongodb://localhost:27017',
  dbURL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jxpry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
