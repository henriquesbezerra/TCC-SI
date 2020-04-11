'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

    users () {
        return this.belongsToMany('App/Models/User')
    }

    backlogs () {
        return this.hasMany('App/Models/Backlog')
    }

    boardColumns () {
        return this.hasMany('App/Models/BoardColumn')
    }
 
}

module.exports = Project
