'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Backlog = use('App/Models/Backlog')
const Task = use('App/Models/Task')

class BacklogController {
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
    const { ...data} = request.all();

    const backlog = await Backlog.create(data);

    return backlog;
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
    const project = await Project.query('id',params.id)
      .with('users')
      .with('backlogs')
      .with('boardColumns').first();

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

    const backlog = await Backlog.findOrFail(params.id)

    const {...data} = request.all();

    backlog.merge(data);

    await backlog.save();

    return backlog;
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
    const backlog = await Backlog.findOrFail(params.id);

    try {

      await Task
        .query()
        .where('backlog_id', params.id)
        .delete();

      let result = await backlog.delete();
      return result;
    } catch (e) {
      return e;
    }
  }
}

module.exports = BacklogController
