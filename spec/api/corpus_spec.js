const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://tireapart.local:5984/corpus/UTT/')
    .expect('status', 200);
});

it ('GET /corpus/C/ should return an array of keys and a value', function () {
  return frisby
    .get('http://tireapart.local:5984/corpus/UTT/')
    .expect('status', 200)
    .expect('jsonTypes', 'rows.*', { // Assert *each* object in 'items' array
      'id': Joi.string().required(),
      'key': Joi.array().required(),
      'value': Joi.object().required()
    });
});
