const connection = require('./connection')

const { generateHash } = require('authenticare/server')

module.exports = {
  userExists,
  getUserByName,
  createUser
}

function userExists (user, db = connection) {
  return db('users')
    .count('id as n')
    .where('name', user)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (user, db = connection) {
  return db('users')
    .select()
    .where('name', user)
    .first()
}

function createUser (user, db = connection) {
  // todo
}
