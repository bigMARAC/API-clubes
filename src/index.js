import Express from 'express'
import cors from 'cors'
import DAO from './database/dao.js'
import TeamController from './controllers/TeamController.js'

const app = Express()
app.use(cors())

let database
(async () => {
    database = new DAO('./../database.db')
    await database.init()
})();

const controllers = {
    team: new TeamController(database),
}

const router = new Express.Router()
router.use(Express.json())

router.post('/register', (req, res) => controllers.team.register(req, res))
router.get('/register/all', (req, res) => controllers.team.all(req, res))
router.delete('/delete', (req, res) => controllers.team.delete(req, res))

app.use('/', router)
app.listen(3000);