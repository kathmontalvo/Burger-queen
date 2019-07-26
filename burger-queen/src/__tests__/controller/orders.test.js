import order from '../../controller/orders';
import nock from 'nock';

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
  ]).persist()

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

it('get request', async (done) => {

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