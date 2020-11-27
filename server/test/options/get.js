process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('GET /api/products/:id/options', () => {
  before(() => {

  })

  after(() => {

  })



  it('OK, get option has one product', async () => {
    const data = { name: 'Tank', description: "Tankest Tank", price: 1299.99, deliveryPrice: 10 };
    const optData = { name: 'Silver', description: "Silver Color"};
    const res = await request(app).post('/api/products').send(data);

    const product = res.body;
    const optUrl = '/api/products/' + product.id + '/options';

    const optPostRes = await request(app).post(optUrl).send(optData);


    const option = optPostRes.body;

    const getByIdUrl = optUrl + '/' + option.id;

    const resOpt = await request(app).get(getByIdUrl);

    expect(resOpt.body.name).to.equal('Silver');


  });

  it('OK, get options have options', async () => {
    const data = { name: 'Tanker', description: "Tanker Tank", price: 1299.99, deliveryPrice: 10 };
    const optData = { name: 'Gold', description: "Gold Color"};
    const res = await request(app).post('/api/products').send(data);

    const product = res.body;
    const optUrl = '/api/products/' + product.id + '/options';

    await request(app).post(optUrl).send(optData);


    const resOpt = await request(app).get(optUrl);

    expect(resOpt.body.items.length).to.be.above(0);


  });



})

