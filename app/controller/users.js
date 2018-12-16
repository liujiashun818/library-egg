
const Controller = require('egg').Controller;

class UsersController extends Controller {
  async signup() {
    let { ctx } = this;
    let user = ctx.request.body;
    try {
      // 保存数据库
       let doc = await ctx.model.user.create(user);
         ctx.body = {
           code: 0,
           data: 'success'
         }
    } catch (error) {
      ctx.body = {
        code: 1,
        data: error
      }
    }
 

  }
}

module.exports = UsersController;
 