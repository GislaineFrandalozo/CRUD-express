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
  res.render('index')
})
route.post('/api/post/:teste1/:teste2', controllers.create)
route.get('/api/get/:teste1', controllers.select)
route.put('/api/PUT', controllers.edit)
route.get('/put/:teste1', controllers.renderEdit)
route.get('/delete/:teste1', controllers.remove)
server.use(express.urlencoded({extended: true}))
server.use(route)
server.listen(port, () => {
    console.log(`Init server port: ${port}`)
    console.log(express.static("public"))
})