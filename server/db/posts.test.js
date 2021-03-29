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
    return db.getAllPosts(testDb)
      .then(posts => {
        expect(posts).toHaveLength(3)
        expect(posts[0].status).toBe('hello world!')
        return null
      })
  })
})

describe('addNewPost', () => {
  it('returns the new post', () => {
    const reqBody = {
      status: 'this is a test!',
      userId: 2
    }

    return db.addNewPost(reqBody, testDb)
      .then(post => {
        expect(post).toHaveProperty('id')
        expect(post.id).toBe(4)
        expect(post.user_id).toBe(reqBody.userId)
        return null
      })
  })
})
