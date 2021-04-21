'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('***VALIDATOR***', () => {

  it('should respond properly to a GET: /person with name query string', async() => {
    const response = await mockRequest.get('/person?name=peter');
    expect(response.status).toBe(200); //status code
    expect(response.body.name).toBe("peter");
    // test for shape/type of data
  });

  it('should respond with a 500 GET: /person WITHOUT name query string', () => {
    return mockRequest.get('/person').then(data => {
      expect(data.status).toBe(500); //status
    })
  });

})