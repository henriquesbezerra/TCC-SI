'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const BoardColumn = use('App/Models/BoardColumn')
/**
 * Resourceful controller for interacting with boardcolumns
 */
class BoardColumnController {
  /**
   * Show a list of all boardcolumns.
   * GET boardcolumns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new boardcolumn.
   * GET boardcolumns/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new boardcolumn.
   * POST boardcolumns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { ...data} = request.all();    
    const boardcolumn = await BoardColumn.create(data);    
    return boardcolumn;
  }

  /**
   * Display a single boardcolumn.
   * GET boardcolumns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing boardcolumn.
   * GET boardcolumns/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update boardcolumn details.
   * PUT or PATCH boardcolumns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    
    const boardcolumn = await BoardColumn.findOrFail(params.id)

    const { ...data } = request.all();
    
    boardcolumn.merge(data);

    await boardcolumn.save();

    return boardcolumn;
  }

  /**
   * Delete a boardcolumn with id.
   * DELETE boardcolumns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BoardColumnController
