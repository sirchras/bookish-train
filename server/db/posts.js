const connection = require('./connection')

module.exports = {
  getAllPosts
}

function getAllPosts (db = connection) {
  return db('posts').select()
}
