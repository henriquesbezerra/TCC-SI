'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {

    this.create('backlogs', (table) => {
      table.increments()
      table.integer('project_id').unsigned().nullable()
      table.integer('type').unsigned().nullable()
      table.string('name', 150).nullable()
      table.date('started_at').nullable()
      table.date('ending_at').nullable()
      table.date('finished_at').nullable()
      table.timestamps()
    });

    this.create('tasks', (table) => {
      table.increments();
      table.integer('backlog_id')
        .unsigned()
        .references('id')
        .inTable('backlogs')
        .nullable()
      table.integer('parent_id')
        .unsigned()
        .references('id')
        .inTable('tasks')
        .nullable()
      table.integer('board_column_id')
        .unsigned()        
        .nullable() 
      table.string('name').nullable()
      table.string('description').nullable()
      table.integer('priority').unsigned().nullable()
      table.date('started_at').nullable()
      table.date('ending_at').nullable()
      table.date('finished_at').nullable()   
      table.timestamps();
    });

    this.create('task_user', (table) => {
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
        .integer('task_id')
        .unsigned() // não pode ser abaixo de zero
        // .notNullable() // brigatorio
        .references('id')
        .inTable('tasks')
        .onDelete('cascade')
        .index('task_id');
      table.timestamps()
    })
  }

  down () {
    this.drop('backlogs');
    this.drop('task_user')
    this.drop('tasks')
  }
}

module.exports = TasksSchema
