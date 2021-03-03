const express = require('express')

const routes = express.Router()

const CommentsController = require('./controllers/commentsController')
const audioController = require('./controllers/audioController')

routes.get('/comments', CommentsController.index)
routes.post('/comment', CommentsController.create)
routes.delete('/comments/:id', CommentsController.delete)

routes.get('/play/:id', audioController.show)

module.exports = routes;