const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./posts')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getAllPosts', () => {
  it('returns all posts', () => {
    const expected = expect.objectContaining({
      id: expect.any(Number),
      status: expect.any(String),
      createdAt: expect.any(String),
      userId: expect.any(Number),
      user: expect.any(String)
    })
    return db.getAllPosts(testDb)
      .then(posts => {
        expect(posts).toHaveLength(3)
        posts.forEach(post => {
          expect(post).toEqual(expected)
        })
        return null
      })
  })
})

describe('getPostById', () => {
  it('returns the post with the matching id', () => {
    const expected = expect.objectContaining({
      id: 1,
      status: expect.any(String),
      createdAt: expect.any(String),
      userId: expect.any(Number),
      user: expect.any(String)
    })
    return db.getPostById(1, testDb)
      .then(post => {
        expect(post).toEqual(expected)
        return null
      })
  })
})

describe('addNewPost', () => {
  it('returns the new post', () => {
    const reqBody = {
      status: 'this is a test!',
      user_id: 2
    }
    return db.addNewPost(reqBody, testDb)
      .then(post => {
        expect(post).toHaveProperty('id')
        expect(post.id).toBe(4)
        expect(post).toHaveProperty('userId')
        expect(post.userId).toBe(reqBody.user_id)
        expect(post).toHaveProperty('user')
        expect(post.createdAt).toBeTruthy()
        return null
      })
  })
})
