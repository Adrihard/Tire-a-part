const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions
const V = require('./vhost');

describe('GET /user/ID', function()
{
	const uri = V.HOST + '/user/toto';

	it ('should return an empty \"rows\" array for a wrong user', function () { 
	  	return frisby 
	    	.get(uri)
	    	.expect('status', 200)
	    	.expect('header', 'Content-Type', 'application/json')
	   		.expect('json', 'rows', []);
	});
});
