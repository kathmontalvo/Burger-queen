import login from '../../controller/login'
import nock from 'nock';


nock('http://localhost:5000')
  .post('/auth', { email: 'user1@gmail.com', password: 'password000' })
  .reply(200, { token: 'asldkjaskldmaslkd123123ssladñs' })
  .persist()

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

it('get token', async (done) => {
    return login('user1@gmail.com', 'password000').then(res=>{
        expect(res.token).toBe('asldkjaskldmaslkd123123ssladñs');
        done()
    })
})
