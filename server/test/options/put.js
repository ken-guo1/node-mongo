process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('PUT /api/products/:id/options/:optionID', () => {
  before(() => {

  })

  after(() => {

  })



  it('OK, updating an option', async () => {
    const data = { name: 'Cat', description: "Extoic Short Hair", price: 1299.99, deliveryPrice: 10 };
    const optData = { name: 'Blue', description: "Blue Color"};
    const updateOptData = { name: 'Grey', description: "Blue Color"};
    const res = await request(app).post('/api/products').send(data);

    const product = res.body;
    const optUrl = '/api/products/' + product.id + '/options';

    const optPostRes = await request(app).post(optUrl).send(optData);


    const option = optPostRes.body;

    const putByIdUrl = optUrl + '/' + option.id;


    const resOpt = await request(app).put(putByIdUrl).send(updateOptData);
    expect(resOpt.statusCode).to.equal(201);

  });
  it('Fail, updating an option with wrong id', async () => {
    const data = { name: 'Apple Macbook', description: "Newest M1 Chip"};

    const res = await request(app).put('/api/products/1234/options/1234').send(data);


    expect(res.statusCode).to.equal(404);



  });



})

