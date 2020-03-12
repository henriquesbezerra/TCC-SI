'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectUserSchema extends Schema {
  up () {
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
    this.drop('project_user')
  }
}

module.exports = ProjectUserSchema
