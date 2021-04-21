'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('***WEB SERVER***', () => {

  it('should respond with a 404 on bad route', async() => {
    return mockRequest.get('/bad-route').then(data => {
      expect(data.status).toBe(404);
    })
  });

  it('should respond with a 404 on bad method', async() => {
    return mockRequest.post('/person').then(data => {
      expect(data.status).toBe(404);
    })
  });

  it('should response with a 500 on an error', () => {
    return mockRequest.get('/person').then(data => {
      expect(data.status).toBe(500);
    })
  });

  it('should respond properly to a GET: /person with name query string', async() => {
    const response = await mockRequest.get('/person?name=peter');
    expect(response.status).toBe(200); //status code
    expect(response.body.name).toBe("peter");
  });

})