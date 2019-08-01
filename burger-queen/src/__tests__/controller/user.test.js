import user from '../../controller/user'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'));

it('get request1', (done) => {
  nock('http://localhost:5000')
    .get('/users/1')
    .reply(200, [{
        "_id":1,
        "email": "amy@gmail.com",
        "roles":{
                    "admin": false
                }    
    }
    ])
  return user(1).then(user => {
    expect(user).toEqual([{
        "_id":1,
        "email": "amy@gmail.com",
        "roles":{
                    "admin": false
                }    
    }
    ]);
    done()
  });
});

it('get request2', (done) => {
    nock('http://localhost:5000')
      .get('/users/1')
      .reply(401, {message: 'Unauthorized'})
    return user(1).catch(user => {
      expect(user).toEqual({message: 'Unauthorized'});
      done()
    });
  });

  it('get request3', (done) => {
    nock('http://localhost:5000')
      .get('/users/1')
      .reply(403, {message: 'Forbidden'})
    return user(1).catch(user => {
      expect(user).toEqual({message: 'Forbidden'});
      done()
    });
  });

  it('get request4', (done) => {
    nock('http://localhost:5000')
      .get('/users/1')
      .reply(404, {message: 'Not Found'})
    return user(1).catch(user => {
      expect(user).toEqual({message: 'Not Found'});
      done()
    });
  });