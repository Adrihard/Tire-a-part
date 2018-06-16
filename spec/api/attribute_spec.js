const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions
const V = require('./vhost');

describe('GET /attribute/C/', function()
{
  const uri = V.HOST + '/attribute/UTT';

  it ('should return a status of 200 OK', function () {
    return frisby
      .get(uri)
      .expect('status', 200);
  });

  it('should have a JSON Content-Type header', function () {
    return frisby.get(uri)
      .expect('header', 'Content-Type', 'application/json');
  });

  it('should not return an error', function () {
    return frisby.get(uri)
      // Should not return an error
      .expectNot('json', { result: 'error' });
  });

  it ('should return an array of keys and a value', function () {
    return frisby
      .get(uri)
      .expect('status', 200)
      .expect('jsonTypes', 'rows.*', { // Assert *each* object in 'items' array
        'key': Joi.array().required(),
        'value': Joi.number().required()
      });
  });
});

describe('GET /attribute/C/', function()
{
  const uri = V.HOST + '/attribute/UTT/DC.publisher';

  it ('GET /attribute/C/A/ should return an array of keys and a value', function () {
    return frisby
      .get(uri)
      .expect('status', 200)
      .expect('jsonTypes', 'rows.*', { // Assert *each* object in 'items' array
        'key': Joi.array().required(),
        'value': Joi.number().required()
      });
  });
});

describe('GET /attribute/C/A/V', function()
{
  const uri = V.HOST + '/attribute/UTT/DC.publisher/ACM';

  it ('should return an id, an array of keys and a value', function () {
    return frisby
      .get(uri)
      .expect('status', 200)
      .expect('jsonTypes', 'rows.*', { // Assert *each* object in 'items' array
        'id': Joi.string().required(),
        'key': Joi.array().required(),
        'value': Joi.object().required()
      });
  });
});
