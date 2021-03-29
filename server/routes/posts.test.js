const request = require('supertest')

const server = require('../server')
const db = require('../db/posts')
const logger = require('../logger')

jest.mock('../db/posts')
jest.mock('../logger')

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

  it('responds with 500 and error on getAllPosts rejection', () => {
    db.getAllPosts.mockImplementation(() => {
      return Promise.reject(new Error('mock DB error'))
    })
    return request(server)
      .get('/api/v1/posts')
      .expect(500)
      .then(err => {
        expect(logger.err).toHaveBeenCalledWith('mock DB error')
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
    db.addNewPost.mockImplementation(post => {
      expect(post.status).toMatch('test')
      expect(post.user_id).toBe(1)
      return Promise.resolve({
        ...post,
        id: 3,
        created_at: new Date(Date.now())
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
        expect(logger.err).toHaveBeenCalledWith('mock DB error')
        expect(err.text).toMatch('internal error')
        return null
      })
  })
})
