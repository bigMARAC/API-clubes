import TeamRepository from './../database/team.js'

export default class TeamController {

    constructor(database) {
        this.repository = new TeamRepository(database)
    }

    async register(request, response) {
        try {
            const subject = this.repository.insert(request.body)
            
            response.send({
                message: 'team created',
                subject
            })
        } catch (error) {
            response.send(error)            
        }
    }

    async all(request, response) {
        try {
            const subjects = await this.repository.all()

            response.send({
                data: subjects
            })
        } catch (error) {
            response.send(error)            
        }
    }

    async delete(req, res) {
        const team = await this.repository.get(req.body.id)
        const id = team.id

        this.repository.delete(id)
        res.send({'message': 'user deleted'})
    }
}