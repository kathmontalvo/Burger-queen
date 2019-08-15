import editStatus from '../../../controller/orders/status'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'));

it('get request1', (done) => {
  nock('http://165.22.166.131:8080')
    .put('/orders/1',{
        'userId': '1',
        'client': 'Laura',
        'products': [
          {
            "product": "Café americano",
            "qty": 5
          }
        ],
        'status': 'pending'
      })
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
        "status": "delivered",
        "dateEntry": "December 17, 1995 03:24:00",
        "dateProcessed": "December 17, 1995 03:24:00"
      }
    ])
  return editStatus('Laura', [
    {
      "product": "Café americano",
      "qty": 5
    }
  ], 'asdfghjklWRET12', '1', 'pending', '1').then(order => {
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
        "status": "delivered",
        "dateEntry": "December 17, 1995 03:24:00",
        "dateProcessed": "December 17, 1995 03:24:00"
      }
    ]);
    done()
  });
});

it('get request2', (done) => {
  nock('http://165.22.166.131:8080')
    .put('/orders/1', {
      'userId': '1',
      'client': 'Laura',
      'products': [
        {
          "product": "Café americano",
          "qty": 5
        }
      ], 
      'status': 'incorrect'
    })
    .reply(400, { message: 'Propiedad inválida a modificar' });
  return editStatus('Laura', [
    {
      "product": "Café americano",
      "qty": 5
    }
  ], 'asdfghjklWRET12', '1', 'incorrect', '1').catch(res => {
    expect(res.message).toBe('Propiedad inválida a modificar');
    done()
  });
});

it('get request3', (done) => {
    nock('http://165.22.166.131:8080')
      .put('/orders/1', {
        'userId': '1',
        'client': 'Laura',
        'products': [], 
        'status': 'pending'
      })
      .reply(401, { message: 'No existe token válido' });
    return editStatus('Laura', [], '', '1', 'pending', '1').catch(res => {
      expect(res.message).toBe('No existe token válido');
      done()
    });
  });

  it('get request4', (done) => {
    nock('http://165.22.166.131:8080')
      .put('/orders/1', {
        'userId': '1',
        'client': 'Laura',
        'products': [], 
        'status': 'pending'
      })
      .reply(404, { message: 'Orden inválida' });
    return editStatus('Laura', [], 'asdfghjklWRET12', '1', 'pending', '1').catch(res => {
      expect(res.message).toBe('Orden inválida');
      done()
    });
  });

  it('get request5', (done) => {
    nock('http://165.22.166.131:8080')
      .put('/orders/1', {
        'userId': '1',
        'client': 'Laura',
        'products': [], 
        'status': 'pending'
      })
      .reply(406, { message: 'Not Acceptable' });
    return editStatus('Laura', [], 'asdfghjklWRET12', '1', 'pending', '1').catch(res => {
      expect(res.message).toBe('Not Acceptable');
      done()
    });
  });