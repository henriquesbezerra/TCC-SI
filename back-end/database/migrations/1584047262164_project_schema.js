'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string('name', 150).notNullable()      
      table.string('description').nullable()
      table.date('started_at').nullable()
      table.date('ending_at').nullable()
      table.date('finished_at').nullable()      
      table.timestamps()
    })

    this.create('board_columns', (table) => {
      table.increments()
      table.integer('project_id')
        .unsigned() // não pode ser abaixo de zero
        .notNullable() // brigatorio
        .references('id')
        .inTable('projects')
        .onDelete('cascade')
        .index('project_id')

      table.string('name', 150).notNullable()      
      table.string('description').nullable()      
      table.timestamps()
    })

    this.create('project_user', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned() // não pode ser abaixo de zero
        // .notNullable() // brigatorio
        .references('id')
        .inTable('users')
        .onDelete('cascade')
        .index('user_id');

      table
        .integer('project_id')
        .unsigned() // não pode ser abaixo de zero
        // .notNullable() // brigatorio
        .references('id')
        .inTable('projects')
        .onDelete('cascade')
        .index('project_id');
      table.timestamps()
    })
  }

  down () {    
    this.drop('board_columns')
    this.drop('project_user')
    this.drop('projects')
  }
}

module.exports = ProjectSchema
