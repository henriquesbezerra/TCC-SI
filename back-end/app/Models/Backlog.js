'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Backlog extends Model {

    project () {
        return this.belongsTo('App/Models/Project')
    }

    tasks () {
        return this.hasMany('App/Models/Task')
    }
}

module.exports = Backlog
