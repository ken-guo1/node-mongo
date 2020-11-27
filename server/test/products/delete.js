process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('DELETE /api/products', () => {
  before(() => {

  })

  after(() => {

  })



  it('OK, deleting a  product', async () => {
    const data = { name: 'Apple Macbook', description: "Newest M1 Chip", price: 1299.99, deliveryPrice: 10 };
    const postRes = await request(app).post('/api/products').send(data);
    const product = postRes.body;
    const url = '/api/products/' + product.id; 

    const res = await request(app).delete(url);
    expect(res.statusCode).to.equal(200);

  });
  it('Fail, deleting a  product with incorrect id', async () => {

    const res = await request(app).delete('/api/products/1234');
    expect(res.statusCode).to.equal(404);



  });



})

