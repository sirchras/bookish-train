const express = require('express')

const db = require('../db/posts')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getAllPosts()
    .then(posts => {
      return res.json({ posts })
    })
    .catch(err => {
      console.error(err)
      return res.status(500).send('internal error')
    })
})

router.post('/', (req, res) => {
  res.sendStatus(501)
})
