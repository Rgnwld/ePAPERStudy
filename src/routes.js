const express = require('express');
const routes = express.Router();

const cadController = require('./controller/CadController');

//Primeira rota
routes.get('/cads/:name', cadController.show)
routes.get('/cads', cadController.index)
routes.post('/cads/:id', cadController.update)
routes.post('/cads', cadController.store)
routes.delete('/cads/:id', cadController.destroy)


module.exports = routes;