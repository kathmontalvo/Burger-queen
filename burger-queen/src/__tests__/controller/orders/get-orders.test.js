import getOrders from '../../../controller/orders/getOrder'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'));


it('get request1', (done) => {
  nock('http://165.22.166.131:8080')
    .get('/orders')
    .reply(200, [
        {
          client: "Alice",
          dateEntry: "2019-08-05T23:21:36.612Z",
          products: [
            {
              qty: 2,
              product: {
                name: "Café americano",
                price: 5,
                productId: "5d4217946e893a00121fdda7"
              }
            }
          ],
          status: "delivering",
          userId: "5d4203b7e96305001250ea9d",
          _id: "5d48ba00e6fb5300123e6ffb"
        }
      ])
  return getOrders('asldkjaskldmaslkd123123ssladñs').then(order => {
    expect(order).toEqual([
        {
          client: "Alice",
          dateEntry: "2019-08-05T23:21:36.612Z",
          products: [
            {
              qty: 2,
              product: {
                name: "Café americano",
                price: 5,
                productId: "5d4217946e893a00121fdda7"
              }
            }
          ],
          status: "delivering",
          userId: "5d4203b7e96305001250ea9d",
          _id: "5d48ba00e6fb5300123e6ffb"
        }
      ]);
    done()
  });
});

it('get request2', (done) => {
  nock('http://165.22.166.131:8080')
    .get('/orders')
    .reply(401, { message: 'Ingrese token válido' })
  return getOrders('asldkjaskldmaslkd123123ssladñs').catch(order => {
    expect(order).toEqual({ message: 'Ingrese token válido' });
    done()
  });
});

it('get request3', (done) => {
  nock('http://165.22.166.131:8080')
    .get('/orders')
    .reply(403, { message: 'Forbidden' })
  return getOrders('asldkjaskldmaslkd123123ssladñs').catch(order => {
    expect(order).toEqual({ message: 'Forbidden' });
    done()
  });
});


