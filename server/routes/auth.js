const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const db = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, db)

module.exports = router
