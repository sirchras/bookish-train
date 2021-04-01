const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./users')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('userExists', () => {
  it('returns true if the user exists', () => {
    return db.userExists('chris', testDb)
      .then(exists => {
        expect(exists).toBeTruthy()
        return null
      })
  })

  it('returns false if the user doesn\'t exist', () => {
    return db.userExists('pete', testDb)
      .then(exists => {
        expect(exists).toBeFalsy()
        return null
      })
  })
})

describe('getUserByName', () => {
  it('returns the user with the matching name', () => {
    return db.getUserByName('chris', testDb)
      .then(user => {
        expect(user).toHaveProperty('id')
        expect(user.name).toMatch('chris')
        expect(user).toHaveProperty('hash')
        return null
      })
  })
})

describe('createUser', () => {
  it('returns the id of the new user', () => {
    return db.createUser('pete', testDb)
      .then(id => {
        expect(id).toBe(3)
        return null
      })
  })

  it('throws an error if the user already exists', () => {
    return expect(db.createUser('chris', testDb))
      .rejects.toMatch('user already exists')
  })
})
