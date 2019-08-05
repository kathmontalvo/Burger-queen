import order from '../../controller/orders/orders'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'));

it('get request1', (done) => {
  nock('http://165.22.166.131:8080')
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
});

it('get request2', (done) => {
  nock('http://165.22.166.131:8080')
    .post('/orders', {
      'userId': '1',
      'client': 'Laura',
      'products': []
    })
    .reply(400, { message: 'Ingrese productos a la orden' });
  return order('Laura', [], 'asdfghjklWRET12', '1').catch(res => {
    expect(res.message).toBe('Ingrese productos a la orden');
    done()
  });
});


it('get request3', (done) => {
  nock('http://165.22.166.131:8080')
    .post('/orders', {
      'userId': '1',
      'client': 'Laura',
      'products': []
    })
    .reply(401, { message: 'No existe token válido' });

  return order('Laura', [], undefined, '1').catch(res => {
    expect(res.message).toBe('No existe token válido');
    done()
  });
});

it('get request3', (done) => {
  nock('http://165.22.166.131:8080')
    .post('/orders', {
      'userId': '1',
      'client': 'Laura',
      'products': []
    })
    .reply(404, { message: 'No existe token válido' });

  return order('Laura', [], undefined, '1').catch(res => {
    expect(res.message).toBe('Not Found')
    done()
  });
})