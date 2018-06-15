const frisby = require('frisby');

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://oa.local:5984/user/toto')
    .expect('status', 200);
});