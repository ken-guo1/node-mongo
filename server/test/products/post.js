process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('POST /api/products', () => {
  before(() => {

  })

  after(() => {

  })


  it('OK, creating a new products', async () => {
    const data = { name: 'Apple Macbook', description: "Newest M1 Chip", price: 1299.99, deliveryPrice: 10 };
      const res = await request(app).post('/api/products').send(data);
  
      const body = res.body;
      expect(body).to.contain.property('id');
      expect(body).to.contain.property('description');
      expect(body).to.contain.property('name');
      expect(body).to.contain.property('price');
      expect(body).to.contain.property('deliveryPrice');



  });

  it('Fail, product requires name', async () => {
      const res = await request(app)
      .post('/api/products')
      .send({ description: 'Apple', price: 1299.99, deliveryPrice: 10 });

      const body = res.body;
      expect(body)
          .to.equal('Product validation failed: name: Path `name` is required.');


  });

  it('Fail, product requires number in price', async () => {
    const res = await request(app)
    .post('/api/products')
    .send({ name: 'Apple', description: 'Apple to eat', price: "one dollar", deliveryPrice: 10 });

    const body = res.body;
    expect(body)
        .to.equal('Product validation failed: price: Cast to Number failed for value "one dollar" at path "price"');


  });
})

