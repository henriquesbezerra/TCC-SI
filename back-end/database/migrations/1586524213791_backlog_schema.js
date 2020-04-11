'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SprintBacklogSchema extends Schema {
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
  }

  down () {       
    this.drop('backlog_task');
    this.drop('backlogs');
  }
}

module.exports = SprintBacklogSchema
