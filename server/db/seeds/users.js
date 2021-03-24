const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('chris'),
      generateHash('steve')
    ]))
    .then(([chrisHash, steveHash]) => {
      return knex('users').insert([
        { id: 1, name: 'chris', hash: chrisHash },
        { id: 2, name: 'steve', hash: steveHash }
      ])
    })
}
