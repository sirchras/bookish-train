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

  it.todo('reqponds with 500 and error on getAllPosts rejection')
})

describe('POST /api/v1/posts', () => {
  it.todo('responds with the new post on addNewPost success')
  it.todo('responds with 500 and error on addNewPost rejection')
})
