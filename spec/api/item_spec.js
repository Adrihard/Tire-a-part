const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://tireapart.local:5984/item/UTT/1fd0ab35225b9a7796149762e87a7e63')
    .expect('status', 200);
});

it ('GET /item/C/I should return an array of keys and a value', function () {
  return frisby
    .get('http://tireapart.local:5984/item/UTT/007f0eb5cb689c041bd224830f6b7d63')
    .expect('status', 200)
    .expect('jsonTypes', 'rows.*', { // Assert *each* object in 'items' array
      'id': Joi.string().required(),
      'key': Joi.array().required(),
      'value': Joi.object().required()
    });
});
