process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('DELETE /api/products/:id/options/:optionID', () => {
  before(() => {

  })

  after(() => {

  })
  it('OK, deleting an option', async () => {
    const data = { name: 'Dog', description: "Extoic Short Hair", price: 1299.99, deliveryPrice: 10 };
    const optData = { name: 'Ginger', description: "Ginger Color"};
    const res = await request(app).post('/api/products').send(data);

    const product = res.body;
    const optUrl = '/api/products/' + product.id + '/options';

    const optPostRes = await request(app).post(optUrl).send(optData);


    const option = optPostRes.body;

    const deleteByIdUrl = optUrl + '/' + option.id;


    const resOpt = await request(app).delete(deleteByIdUrl);
    expect(resOpt.statusCode).to.equal(200);

  });
  it('Fail, delete an option with wrong id', async () => {

    const res = await request(app).delete('/api/products/1234/options/1234');


    expect(res.statusCode).to.equal(404);



  });






})

