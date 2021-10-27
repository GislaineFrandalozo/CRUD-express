const express = require('express')
const server = express()
const route = express.Router()
const path = require('path')
const insert = require('./controllers/insert')
const port = 3000

server.set('view engine', 'ejs')
server.use(express.static("public"))
server.set('views', path.join(__dirname, 'views'))

route.get('/', (req, res) => {
  res.render('index')
})
route.post('/?', insert.create)
server.use(route)
server.listen(port, () => {
    console.log(`Init server port: ${port}`)
    console.log(express.static("public"))
})