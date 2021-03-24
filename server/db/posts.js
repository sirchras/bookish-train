const connection = require('./connection')

export function getAllPosts (db = connection) {
  return db('posts').select()
}
