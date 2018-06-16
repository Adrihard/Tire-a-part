const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions
const V = require('./vhost');

describe('GET /corpus/C/', function()
{
  const uri = V.HOST + '/corpus/UTT';

  it ('should return a status of 200 OK', function () {
    return frisby
      .get(uri)
      .expect('status', 200);
  });

  it ('should return an array of keys and a value', function () {
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
