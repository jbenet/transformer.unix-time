var Type = require('transformer-type');

module.exports = new Type({
  // @context and type filled in automatically.
  'id': 'unix-time',
  'description': 'UNIX DateTime.',
  'schema': "integer"
});
