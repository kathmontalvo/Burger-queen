import login from '../../controller/login'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

it('get token', async (done) => {
  nock('http://165.22.166.131:8080')
  .post('/auth', { email: 'user1@gmail.com', password: 'password000' })
  .reply(200, { token: 'asldkjaskldmaslkd123123ssladñs' })
    return login('user1@gmail.com', 'password000').then(res=>{
        expect(res.token).toBe('asldkjaskldmaslkd123123ssladñs');
        done()
    })
})

it('get error', async (done) => {
  nock('http://165.22.166.131:8080')
  .post('/auth', { email: 'user2@gmail.com', password: 'password123' })
  .reply(400, { message: 'Ingrese su usuario y/o contraseña' })
    return login('user2@gmail.com', 'password123').catch(res=>{
        expect(res.message).toBe('Ingrese su usuario y/o contraseña');
        done()
    })
})

it('get error', async (done) => {
  nock('http://165.22.166.131:8080')
  .post('/auth', { email: 'user2@gmail.com', password: 'password123' })
  .reply(404, { message: 'Not Found' })
    return login('user2@gmail.com', 'password123').catch(res=>{
        expect(res.message).toBe('Not Found');
        done()
    })
})

it('get error', async (done) => {
  nock('http://165.22.166.131:8080')
  .post('/auth', { email: 'user2@gmail.com', password: 'password123' })
  .reply(401, { message: 'Ingrese correctamente su usuario y/o contraseña' })
    return login('user2@gmail.com', 'password123').catch(res=>{
        expect(res.message).toBe('Ingrese correctamente su usuario y/o contraseña');
        done()
    })
})
