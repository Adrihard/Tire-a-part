const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://tireapart.local:5984/attribute/UTT/')
    .expect('status', 200);
});

it('should have a JSON Content-Type header', function () {
  return frisby.get('http://tireapart.local:5984/attribute/UTT/')
    .expect('header', 'Content-Type', 'application/json');
});

it('should not return an error', function () {
  return frisby.get('https://httpbin.org/headers')
    // Should not return an error
    .expectNot('json', { result: 'error' });
});

it ('GET /attribute/C/ should return an array of keys and a value', function () {
  return frisby
    .get('http://tireapart.local:5984/attribute/UTT/')
    .expect('status', 200)
    .expect('jsonTypes', 'rows.*', { // Assert *each* object in 'items' array
      'key': Joi.array().required(),
      'value': Joi.number().required()
    });
});

it ('GET /attribute/C/A/ should return an array of keys and a value', function () {
  return frisby
    .get('http://tireapart.local:5984/attribute/UTT/DC.publisher')
    .expect('status', 200)
    .expect('jsonTypes', 'rows.*', { // Assert *each* object in 'items' array
      'key': Joi.array().required(),
      'value': Joi.number().required()
    });
});

it ('GET /attribute/C/A/V should return an id, an array of keys and a value', function () {
  return frisby
    .get('http://tireapart.local:5984/attribute/UTT/DC.publisher/ACM')
    .expect('status', 200)
    .expect('jsonTypes', 'rows.*', { // Assert *each* object in 'items' array
      'id': Joi.string().required(),
      'key': Joi.array().required(),
      'value': Joi.object().required()
    });
});
