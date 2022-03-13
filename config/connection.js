const { connect, connection } = require('mongoose');

connect('mongodb://localhost/bookface', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
