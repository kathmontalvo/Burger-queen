import add from '../../controller/users/add'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

it('get token', async (done) => {
  nock('http://165.22.166.131:8080')
  .post('/users', { email: 'user1@gmail.com', password: 'password000', roles:{admin:true} })
  .reply(200, [{
    "_id": '1',
    "email": "user1@gmail.com",
    "roles": {
      "admin": true
    }
  }
  ])
    return add('asdfghjklWRET12','user1@gmail.com', 'password000', true).then(res=>{
        expect(res).toEqual([{
            "_id": '1',
            "email": "user1@gmail.com",
            "roles": {
              "admin": true
            }
          }
          ]);
        done()
    })
})

it('get error', async (done) => {
  nock('http://165.22.166.131:8080')
  .post('/users', { email: 'user1@gmail.com', password: 'password000', roles:{admin: true} })
  .reply(400, { message: 'Ingresar correo y/o contraseña válidos' })
    return add('asdfghjklWRET12','user1@gmail.com', 'password000', true).catch(res=>{
        expect(res.message).toBe('Ingresar correo y/o contraseña válidos');
        done()
    })
})

it('get error', async (done) => {
  nock('http://165.22.166.131:8080')
  .post('/users',{ email: 'user1@gmail.com', password: 'password000', roles:{admin: true} })
  .reply(401, { message: 'No hay cabecera de autenticación' })
    return add('asdfghjklWRET12','user1@gmail.com', 'password000', true).catch(res=>{
        expect(res.message).toBe('No hay cabecera de autenticación');
        done()
    })
})

it('get error', async (done) => {
  nock('http://165.22.166.131:8080')
  .post('/users', { email: 'user1@gmail.com', password: 'password000', roles:{admin: true} })
  .reply(403, { message: 'Email ingresado ya existe. Intente otra vez.' })
    return add('asdfghjklWRET12','user1@gmail.com', 'password000', true).catch(res=>{
        expect(res.message).toBe('Email ingresado ya existe. Intente otra vez.');
        done()
    })
})

it('get error', async (done) => {
    nock('http://165.22.166.131:8080')
    .post('/users', { email: 'user1@gmail.com', password: 'password000', roles:{admin: true} })
    .reply(404, { message: 'Not Found' })
      return add('asdfghjklWRET12','user1@gmail.com', 'password000', true).catch(res=>{
          expect(res.message).toBe('Not Found');
          done()
      })
  })