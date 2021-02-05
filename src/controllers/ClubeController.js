const Socio = require('./../models/Socio')
const Clube = require('./../models/Clube')

module.exports = {
    async index(req, res) {
        const clubes = await Clube.findAll({
            order: ['name']
        })

        return res.json(clubes)
    },

    async store(req, res) {
        const { name } = req.body
        const clube = await Clube.create({ name })
        return res.json(clube)
    }
}