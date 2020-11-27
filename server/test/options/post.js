process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('POST /api/products/:id/options', () => {
  before(() => {

  })

  after(() => {

  })


  it('OK, creating a new option', async () => {
    const data = { name: 'Dell', description: "Newest M1 Chip", price: 1299.99, deliveryPrice: 10 };
    const optData = { name: 'Black', description: "Black Color"};
    const res = await request(app).post('/api/products').send(data);

    const product = res.body;
    const optUrl = '/api/products/' + product.id + '/options';

    const optRes = await request(app).post(optUrl).send(optData);


    const resOpt = optRes.body;
    expect(resOpt).to.contain.property('id');
    expect(resOpt).to.contain.property('description');
    expect(resOpt).to.contain.property('name');




  });

  it('Fail, option requires name', async () => {
    const data = { name: 'Dell', description: "Newest M1 Chip", price: 1299.99, deliveryPrice: 10 };
    const optData = {  description: "Black Color"};
    const res = await request(app).post('/api/products').send(data);

    const product = res.body;
    const optUrl = '/api/products/' + product.id + '/options';
    const optRes = await request(app).post(optUrl).send(optData);

    const body = optRes.body;
    expect(body)
        .to.equal('ProductOption validation failed: name: Path `name` is required.');


  });


})

