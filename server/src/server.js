const express = require('express')
const path = require('path')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(express.static('public'));

//notFound
app.use((req, res, next) => {
    const error = new Error('NotFound')
    error.status = 404
    next(error)
})

//catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

app.listen(3333, () => {
    console.log('Server is running')
})
