'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('***LOGGER***', () => {

  it('should log request method and path on GET: /person?name=peter', async() => {
    const consoleSpy = jest.spyOn(console, 'log');
    const response = await mockRequest.get('/person?name=peter');
    expect(response.status).toBe(200); //status code
    expect(consoleSpy).toHaveBeenCalledWith('Request data:', 'GET', '/person');
  });

  it('should log request method and path GET: /person', async() => {
    const consoleSpy = jest.spyOn(console, 'log');
    const response = await mockRequest.get('/person');
    expect(response.status).toBe(500); //status code
    expect(consoleSpy).toHaveBeenCalledWith('Request data:', 'GET', '/person');
  });

})