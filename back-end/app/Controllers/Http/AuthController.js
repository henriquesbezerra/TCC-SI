'use strict'

const User = use('App/Models/User');

class AuthController {
    async add({ request }){
        const data = request.all();
        const user = await User.create(data);
        return user;
    }
    async login({ request, auth }){
        const { email, password } = request.all();
        const access_token = await auth.attempt(email, password);
        return access_token;
    }
}

module.exports = AuthController
