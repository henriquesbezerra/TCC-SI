'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/login', "AuthController.login");

Route.post('/add', "AuthController.add");

Route.get('/project', "ProjectController.index").middleware(['auth']);
Route.post('/project', "ProjectController.store").middleware(['auth']);
Route.put('/project/:id', "ProjectController.update").middleware(['auth']);