'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateUsersSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table.string('name', 150).nullable()
      table.date('birthdate', 150).nullable()
      table.string('phone', 60).nullable()
      table.string('biography', 60).nullable()
      table.string('office', 60).nullable()
      table.integer('access_level').nullable()
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdateUsersSchema
