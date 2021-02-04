import BaseModel from './model.js'

export default class TeamRepository extends BaseModel {
    name = 'team'

    constructor(dao) {
        super(dao)
        this.dao = dao
    }

    create() {
        const sql = `
        CREATE TABLE IF NOT EXISTS ${this.name} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )`

        return this.dao.run(sql)
    }
}