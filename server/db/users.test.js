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
  it.todo('returns whether user exists')
})

describe('getUserByName', () => {
  it.todo('returns the user with the matching name')
})

describe('createUser', () => {
  it.todo('returns the id of the new user')
})
