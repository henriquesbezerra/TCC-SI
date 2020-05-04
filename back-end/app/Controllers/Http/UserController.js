'use strict'

const User = use('App/Models/User');

class UserController {
    async index ({ request, response, view }) {
        const projects = await User.all();
        return projects;
      }
}

module.exports = UserController
