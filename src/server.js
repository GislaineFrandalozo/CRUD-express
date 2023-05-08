const express = require('express');
const server = express();
const route = express.Router();
const path = require('path');
const notesControllers = require('./controllers/notesControllers');
const port = 3000

server.use(express.json()); 
server.set('view engine', 'ejs');
server.use(express.static("public"));
server.set('views', path.join(__dirname, 'views'));


/**
*   Routes
*/


route.get('/', (req, res) => {
  res.redirect('/notes')
});

route.get('/about', (req, res) => {
  res.render('about');
});

  // CRUD notes
route.get('/notes', notesControllers.index);
route.get('/notes/create', notesControllers.create);
route.post('/notes', notesControllers.store);
route.get('/notes/:id', notesControllers.show);
route.get('/notes/:id/edit', notesControllers.edit);
route.put('/notes/:id', notesControllers.update);
route.delete('/notes/:id', notesControllers.destroy);

  

server.use(express.urlencoded({extended: true}));
server.use(route);
server.listen(port, () => {
    console.log(`Init server port: ${port}`)
    console.log(express.static("public"))
});
