'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async getPager (modName, fields=[]) {
    const { ctx } = this;
    let { pageNum = 1 ,pageSize = 5, keyword = ''} = ctx.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
    let query ={};
    if(keyword && fields.length > 0) {
        // 有一个条件满足就好
        query['$or'] = fields.map(field => ({[field]: new RegExp(keyword)})); 
      }
    return await ctx.model[modName].find(query)
      .skip((pageNum-1)*pageSize)
      .limit(pageSize);

  }
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
