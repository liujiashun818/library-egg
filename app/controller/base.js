'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async getPager (modName, fields=[], populateFields = []) {
    const { ctx } = this;
    let { pageNum = 1 ,pageSize = 5, keyword = ''} = ctx.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
    let query ={};
    if(keyword && fields.length > 0) {
        // 有一个条件满足就好
        query['$or'] = fields.map(field => ({[field]: new RegExp(keyword)})); 
      }
    let total = await ctx.model[modName].count(query);

    let items = await ctx.model[modName].find(query)
      .skip((pageNum-1)*pageSize)
      .limit(pageSize);

      this.success({
        pageNum,
        pageSize,
        items,
        total,
        pageCount: Math.ceil(total/pageSize)
      })

      const { ctx } = this;
      let { pageNum = 1, pageSize = 5, keyword = '' } = ctx.query;
      pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
      pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
      let query = {};
      if (keyword && fields.length > 0) {
          query['$or'] = fields.map(field => ({ [field]: new RegExp(keyword) }));
      }
      let total = await ctx.model[modName].count(query);
      let cursor = ctx.model[modName].find(query).sort({ _id: -1 }).skip((pageNum - 1) * pageSize).limit(pageSize);
      populateFields.forEach(field => {
          cursor = cursor.populate(field);
      });
      let items = await cursor;
      this.success({
          pageNum,
          pageSize,
          items,
          total
      });
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
