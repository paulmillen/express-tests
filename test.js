const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server.js');
const should = chai.should();

chai.use(chaiHttp);


describe('Hello World', () => {
  it('should return Hello World', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        console.log(res);
        res.should.have.status(200);
        res.text.should.equal('Hello World')
        done();
      })
  })
});
