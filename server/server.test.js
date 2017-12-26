const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('server tests', () => {

  describe('root url', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('hello world')
        .end(done);
    });
  });


  describe('about url', () => {
    // it('should return 404 error', (done) => {
    //   request(app)
    //     .get('/about')
    //     .expect(404)
    //     .expect({
    //       error: 'page not found'
    //     })
    //     .end(done);
    // });

    // with expect:
    it('should return 404 error', (done) => {
      request(app)
        .get('/about')
        .expect(404)
        .expect((response) => {
          expect(response.body).toInclude({
            error: 'page not found'
          });
        })
        .end(done);
    });
  });
});

