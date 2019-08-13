import user from '../../controller/users/get-total'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'));

it('get request1', (done) => {
  nock('http://165.22.166.131:8080')
    .get('/users')
    .reply(200, [{
      "_id": "1",
      "email": "amy@gmail.com",
      "roles": {
        "admin": false
      }
    },
    {
        "_id": "2",
        "email": "emily@gmail.com",
        "roles": {
          "admin": true
        }
      }
    ])
  return user("asldkjaskldmaslkd123123ssladñs").then(user => {
    expect(user).toEqual([{
        "_id": "1",
        "email": "amy@gmail.com",
        "roles": {
          "admin": false
        }
      },
      {
          "_id": "2",
          "email": "emily@gmail.com",
          "roles": {
            "admin": true
          }
        }
      ]);
    done()
  });
});

it('get request2', (done) => {
  nock('http://165.22.166.131:8080')
    .get('/users')
    .reply(401, { message: 'No hay cabecera de autenticación' })
  return user("asldkjaskldmaslkd123123ssladñs").catch(user => {
    expect(user).toEqual({ message: 'No hay cabecera de autenticación' });
    done()
  });
});

it('get request3', (done) => {
  nock('http://165.22.166.131:8080')
    .get('/users')
    .reply(403, { message: 'Debes ser admin para acceder' })
  return user("asldkjaskldmaslkd123123ssladñs").catch(user => {
    expect(user).toEqual({ message: 'Debes ser admin para acceder' });
    done()
  });
});

it('get request4', (done) => {
  nock('http://165.22.166.131:8080')
    .get('/users')
    .reply(404, { message: 'Not Found' })
  return user("asldkjaskldmaslkd123123ssladñs").catch(user => {
    expect(user).toEqual({ message: 'Not Found' });
    done()
  });
});
