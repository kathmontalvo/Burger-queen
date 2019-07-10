import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import nock from 'nock';
import MyFetch from '../components/fetch'

//global.fetch = require('nock')
() => nock('http://localhost:5000')
.post('/auth', { email: 'user1@mail.com', password: 'password000' })
.reply(200, { token: 'asdfghASDFGH12312asdQWE' })
.persist()

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))


describe('submit form', () => {

  it('fetch', (done) => {
    fetch('http://localhost:5000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'email': 'user1@mail.com', 'password': 'password000' })
    })
      .then(resp => resp.json())
      .then((res) => {
        expect(res.token).toBe('asdfghASDFGH12312asdQWE')
        done()
      })
  });
})
