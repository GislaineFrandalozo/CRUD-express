const express = require('express')
const server = express()
const route = express.Router()
const path = require('path')
const controllers = require('./controllers/controllers')
const port = 3000

server.set('view engine', 'ejs')
server.use(express.static("public"))
server.set('views', path.join(__dirname, 'views'))

route.get('/', (req, res) => {
  res.render('index', {resObj: 0})
})
route.post('/api/:teste1/:teste2', controllers.create)
route.get('/api/:teste1', controllers.select)
server.use(express.urlencoded({extended: true}))
server.use(route)
server.listen(port, () => {
    console.log(`Init server port: ${port}`)
    console.log(express.static("public"))
})