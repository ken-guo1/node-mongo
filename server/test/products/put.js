process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('PUT /api/products', () => {
  before(() => {

  })

  after(() => {

  })



  it('OK, updating a  product', async () => {
    const updateData = {name:'Banana'};
    const data = { name: 'Apple Macbook', description: "Newest M1 Chip", price: 1299.99, deliveryPrice: 10 };
    const postRes = await request(app).post('/api/products').send(data);
    const product = postRes.body;
    const url = '/api/products/' + product.id; 
    const res = await request(app).put(url).send(updateData);
    expect(res.statusCode).to.equal(201);

  });
  it('Fail, updating a  product with empty db', async () => {
    const data = { name: 'Apple Macbook', description: "Newest M1 Chip", price: 1299.99, deliveryPrice: 10 };

    const res = await request(app).put('/api/products/1234').send(data);


    expect(res.statusCode).to.equal(404);



  });



})

