'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  get user(){
    return this.ctx.session.user;
  }
  success(data){
    this.ctx.body = {
      code: 0,
      data
    }
  }
  error(error){
    this.ctx.body = {
      code: 1,
      error
    }
  }
}

module.exports = BaseController;
