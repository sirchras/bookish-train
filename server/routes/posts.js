const express = require('express')

const db = require('../db/posts')
const logger = require('../logger')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getAllPosts()
    .then(posts => {
      return res.json({ posts })
    })
    .catch(err => {
      logger.err(err.message)
      return res.status(500).send('internal error')
    })
})

router.post('/', (req, res) => {
  const { status, userId } = req.body
  db.addNewPost({ status, user_id: userId })
    .then(post => {
      return res.status(201).json(post)
    })
    .catch(err => {
      logger.err(err.message)
      return res.status(500).send('internal error')
    })
})
