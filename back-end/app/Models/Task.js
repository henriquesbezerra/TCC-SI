'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
    users () {
        return this.belongsToMany('App/Models/User')
    }

    backlog () {
        return this.belongsTo('App/Models/Backlog')
    }
}

module.exports = Task
