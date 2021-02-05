const express = require('express')
const SocioController = require('./controllers/SocioController')
const ClubeController = require('./controllers/ClubeController')

const routes = express.Router()

routes.post('/clubes', ClubeController.store)
routes.get('/clubes', ClubeController.index)

routes.get('/socios/:socio_id/', SocioController.index)
routes.get('/socios/', SocioController.index)

routes.post('/socios/register', SocioController.store)
routes.delete('/clubes/:clube_id/socios', SocioController.delete)

module.exports = routes