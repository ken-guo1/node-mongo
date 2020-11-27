process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

const Utils = require("../../helpers/utils");


describe('GET /api/products', () => {
  before( () => {

  })

  after(() => {

  })



  it('OK, get products has products', async () => {
    const data = { name: 'Apple Macbook', description: "Newest M1 Chip", price: 1299.99, deliveryPrice: 10 };
    await request(app).post('/api/products').send(data);
    const res = await request(app).get('/api/products');


    const items = res.body.items;
    expect(items.length).to.be.above(0);



  });
  it('OK, get products with ID has product', async () => {
    const data = { name: 'Watermelon phone', description: "Freshest watermelon phone", price: 1299.99, deliveryPrice: 10 };
    const resData = await request(app).post('/api/products').send(data);
    const product = resData.body;
    const url = '/api/products/' + product.id;

    const res = await request(app).get(url);


    const resProduct = res.body;
    expect(resProduct.name).to.equal('Watermelon phone');



  });
  it('OK, get products with name has matched name', async () => {
    const data = { name: 'Orange', description: "Fresh Orange", price: 1299.99, deliveryPrice: 10 };
    await request(app).post('/api/products').send(data);
    const url = '/api/products?name=Orange';
    const res = await request(app).get('/api/products').query({name:data.name});

    
    const items = res.body.items;
    expect(items.length).to.be.above(0);



  });



})

