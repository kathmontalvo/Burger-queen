import deleteOrder from '../../../controller/orders/delete'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'));

it('get request1', (done) => {
  nock('http://165.22.166.131:8080')
    .delete('/orders/1')
    .reply(200, [
      {
        "_id": "1",
        "userId": "1",
        "client": "Laura",
        "products": [
          {
            "product": "Café americano",
            "qty": 5
          }
        ],
        "status": "pending",
        "dateEntry": "December 17, 1995 03:24:00",
        "dateProcessed": "December 17, 1995 03:24:00"
      }
    ])
  return deleteOrder('asdfghjklWRET12', '1').then(order => {
    expect(order).toEqual([
      {
        "_id": "1",
        "userId": "1",
        "client": "Laura",
        "products": [
          {
            "product": "Café americano",
            "qty": 5
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
    .delete('/orders/1')
    .reply(401, { message: 'No existe token válido' });
  return deleteOrder('', '1').catch(res => {
    expect(res.message).toBe('No existe token válido');
    done()
  });
});

it('get request3', (done) => {
    nock('http://165.22.166.131:8080')
      .delete('/orders/1')
      .reply(404, { message: 'Orden inválida' });
    return deleteOrder('asdfghjklWRET12', '1').catch(res => {
      expect(res.message).toBe('Orden inválida');
      done()
    });
  });

  it('get request4', (done) => {
    nock('http://165.22.166.131:8080')
      .delete('/orders/1')
      .reply(406, { message: 'Not Acceptable' });
    return deleteOrder('asdfghjklWRET12', '1').catch(res => {
      expect(res.message).toBe('Not Acceptable');
      done()
    });
  });