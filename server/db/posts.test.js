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
