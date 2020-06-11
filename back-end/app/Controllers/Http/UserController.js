'use strict'

const User = use('App/Models/User');

class UserController {
    async index ({ request, response, view }) {
      const users = await User.all();
      return users;
    }

    async update ({ params, request, response }) {

      const user = await User.findOrFail(params.id);

      const {...data} = request.all();

      user.merge(data);

      const saved = await user.save();

      return {saved, user};
    }

    async destroy ({ params, request, response }) {
      const user = await User.findOrFail(params.id)
      try {
        let result = await user.delete();
        return result;
      } catch (e) {
        return e;
      }
    }
}

module.exports = UserController
