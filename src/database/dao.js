import { open } from 'sqlite'
import sqlite3 from 'sqlite3'
import TeamRepository from './team.js'

export default class DAO {

    repositories = [
        TeamRepository,
        // UserRepository,
        // SubjectRepository
    ]

    constructor(databasePath) {
        this.databasePath = databasePath
    }

    async init() {
        this.instance = await open({
            filename: this.databasePath,
            driver: sqlite3.Database
        })

        for (const Repository of this.repositories) {
            const rep = new Repository(this.instance)
            
            if (rep.create()) {
                console.log(`${rep.name} repository created.`)    
            }
        }
    }

    async run(query, params) {
        try {
            return await this.instance.run(query, params)
        } catch (error) {
            console.log(error)
        }
    }
}