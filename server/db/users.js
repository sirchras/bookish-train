const connection = require('./connection')

const { generateHash } = require('authenticare/server')

module.exports = {
  userExists,
  getUserByName,
  createUser
}

function userExists (user, db = connection) {
  // todo
}

function getUserByName (user, db = connection) {
  // todo
}

function createUser (user, db = connection) {
  // todo
}
