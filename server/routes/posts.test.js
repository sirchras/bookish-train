const request = require('supertest')

const server = require('../server')
const db = require('../db/posts')

jest.mock('../db/posts')

const mockPosts = [
  {
    id: 1,
    status: 'hello world!',
    created_at: '2021-03-24T03:53:28.372Z',
    user_id: 1
  },
  {
    id: 2,
    status: 'this is a test',
    created_at: '2021-03-24T03:53:59.933Z',
    user_id: 1
  }
]

describe('GET /api/v1/posts', () => {
  it('responds with posts array on getAllPosts success', () => {
    db.getAllPosts.mockImplementation(() => {
      return Promise.resolve(mockPosts)
    })
    return request(server)
      .get('/api/v1/posts')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({ body }) => {
        expect(body.posts).toHaveLength(2)
        return null
      })
  })

  it('reqponds with 500 and error on getAllPosts rejection', () => {
    db.getAllPosts.mockImplementation(() => {
      return Promise.reject(new Error('mock DB error'))
    })
    return request(server)
      .get('/api/v1/posts')
      .expect(500)
      .then(err => {
        expect(err.text).toMatch('internal error')
        return null
      })
  })
})

describe('POST /api/v1/posts', () => {
  it('responds with the new post on addNewPost success', () => {
    const newPost = {
      status: 'test status',
      userId: 1
    }
    expect.assertions(3)
    db.addNewPost.mockImplementation(({ status, userId }) => {
      expect(status).toMatch('test')
      expect(userId).toBe(1)
      return Promise.resolve({
        id: 3,
        status,
        created_at: new Date(Date.now()),
        user_id: userId
      })
    })
    return request(server)
      .post('/api/v1/posts')
      .send(newPost)
      .expect('Content-Type', /json/)
      .expect(201)
      .then(({ body }) => {
        expect(body.status).toBe('test status')
        return null
      })
  })
  it('responds with 500 and error on addNewPost rejection', () => {
    db.addNewPost.mockImplementation(() => {
      return Promise.reject(new Error('mock DB error'))
    })
    return request(server)
      .get('/api/v1/posts')
      .expect(500)
      .then(err => {
        expect(err.text).toMatch('internal error')
        return null
      })
  })
})
