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

Route.get('/users', "UserController.index").middleware(['auth']);

Route.resource('/project', "ProjectController")
  .apiOnly()
  .middleware(['auth']);
  
Route.resource('/board-column', "BoardColumnController")
  .apiOnly()
  .middleware(['auth']);

Route.resource('/backlog', "BacklogController")
  .apiOnly()
  .middleware(['auth']);

Route.resource('/task', "TaskController")
  .apiOnly()
  .middleware(['auth']);
   