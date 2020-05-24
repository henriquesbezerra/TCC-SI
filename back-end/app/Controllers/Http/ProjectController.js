'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Project = use("App/Models/Project");


/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const projects = await Project.query()
      .with('users')
      .with('backlogs')
      .with('backlogs.tasks')
      .with('boardColumns').fetch();
    return projects;
  }

  /**
   * Create/save a new project.
   * POST projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { users, ...data} = request.all();
    
    const project = await Project.create(data);

    await project.backlogs().create({type: 1});
    await project.load('backlogs');
    await project.load('boardColumns');

    if(users && users.length > 0){
      await project.users().attach(users);
      await project.load('users');
    }
    
    return project;
  }

  /**
    * Display a single task.
    * GET tasks/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
  async show ({ params, request, response, view }) {
    console.log("ID",params.id);
    const project = await Project.query()
      .with('users')
      .with('backlogs')  
      .with('backlogs.tasks')    
      .with('backlogs.tasks.users')
      .with('boardColumns')
      .where('id', params.id).first();  
      
    console.log("ID", project);
    return project;
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const project = await Project.findOrFail(params.id)

    const { users, ...data} = request.all();
    
    project.merge(data);

    await project.save();

    if(users){
      await project.users().sync(users);
      await project.load('users');
    }

    return project;
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const project = await Project.findOrFail(params.id)
    try {
      let result = await project.delete();
      return result;
    } catch (e) {
      return e;
    }
  }
}

module.exports = ProjectController
