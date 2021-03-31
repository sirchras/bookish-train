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

describe('addNewPost', () => {
  it('returns the new post', () => {
    const reqBody = {
      status: 'this is a test!',
      user_id: 2
    }

    return db.addNewPost(reqBody, testDb)
      .then(post => {
        expect(post).toMatchObject(reqBody)
        expect(post).toHaveProperty('id')
        expect(post.id).toBe(4)
        expect(post.created_at).toBeTruthy()
        return null
      })
  })
})
