const connection = require('./connection')

const { generateHash } = require('authenticare/server')

module.exports = {
  userExists,
  getUserByName,
  createUser
}

function userExists (name, db = connection) {
  return db('users')
    .count('id as n')
    .where('name', name)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (name, db = connection) {
  return db('users')
    .select()
    .where('name', name)
    .first()
}

function createUser (user, db = connection) {
  const { username: name, password } = user
  return userExists(name, db)
    .then(exists => {
      if (exists) throw new Error('user already exists')
      return password
    })
    .then(generateHash)
    .then(hash => {
      return db('users')
        .insert({ name, hash }, 'id')
    })
}
