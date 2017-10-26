const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server.js');
const expect = chai.expect;

chai.use(chaiHttp);


describe('Hello World', () => {
  it('should return Hello World', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        console.log(res);
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Hello World');
        done();
      })
  })
});
