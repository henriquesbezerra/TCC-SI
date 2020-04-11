'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BoardColumn extends Model {

    project () {
        return this.belongsTo('App/Models/Project')
    }

    
}

module.exports = BoardColumn
