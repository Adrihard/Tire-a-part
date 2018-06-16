const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions
const V = require('./vhost');

describe('GET /topic/ID/ID', function()
{
  const uri = V.HOST + '/topic/toto/toto';

  it ('should return an empty \"rows\" array for a wrong viewpoint and/or a wrong topic', function () { 
      return frisby 
        .get(uri)
        .expect('status', 200)
        .expect('header', 'Content-Type', 'application/json')
        .expect('json', 'rows', []);
  });
});