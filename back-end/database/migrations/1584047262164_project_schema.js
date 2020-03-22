'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string('titulo', 150).notNullable()
      table.string('cliente', 150).nullable()
      table.string('descricao').nullable()
      table.date('data_inicio').nullable()
      table.date('data_termino').nullable()      
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
