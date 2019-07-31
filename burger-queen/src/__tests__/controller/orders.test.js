import nock from 'nock';
import order from '../../controller/__mocks__/orders'

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

it('get request',(done) => {
  nock('http://localhost:5000')
  .post('/orders', {
    'userId': '1',
    'client': 'Laura',
    'products': [
      {
        "product": "Café americano",
        "qty": "5"
      }
    ]
  })
  .reply(200, [
    {
      "_id": "1",
      "userId": "1",
      "client": "Laura",
      "products": [
        {
          "product": "Café americano",
          "qty": "5"
        }
      ],
      "status": "pending",
      "dateEntry": "December 17, 1995 03:24:00",
      "dateProcessed": "December 17, 1995 03:24:00"
    }
  ])
  return order('Laura', [
    {
      "product": "Café americano",
      "qty": "5"
    }
  ], 'asdfghjklWRET12', '1').then(order => {
    expect(order).toEqual([
      {
        "_id": "1",
        "userId": "1",
        "client": "Laura",
        "products": [
          {
            "product": "Café americano",
            "qty": "5"
          }
        ],
        "status": "pending",
        "dateEntry": "December 17, 1995 03:24:00",
        "dateProcessed": "December 17, 1995 03:24:00"
      }
    ]);
    done()
  });

})

it('get request', (done) => {
  nock('http://localhost:5000')
  .post('/orders', {
    'client': 'Laura',
  })
  .reply(400, {message: 'Ingrese productos a la orden'})
  return order('Laura', 'asdfghjklWRET12').then(order => {
    expect(order).toBe('Ingrese productos a la orden');
    done()
  });

})


it('get request', (done) => {
  nock('http://localhost:5000')
  .post('/orders', {
    'userId': '1',
    'client': 'Laura',
    'products': []
  })
  .reply(401, {message: 'No existe token válido'});

  return order('Laura', [], 'asdfghjklWRET12', '1').then(order => {
    expect(order).toBe('No existe token válido');
    done()
  });

})