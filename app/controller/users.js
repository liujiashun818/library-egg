
// const Controller = require('egg').Controller;
const BaseController = require('./base');

class UsersController extends BaseController {
  async signup() {
    let { ctx } = this;
    let user = ctx.request.body;
    try {
      // 保存数据库
       user = await ctx.model.User.create(user);
       this.success({user});
    } catch (error) {
      this.error(error)
    }
  }
  async signin() {
    let { ctx } = this;
    let user = ctx.request.body;
    try {
      user = await ctx.model.User.findOne(user);
      if(user) {
        ctx.session.user = user; // 存到本地缓存， 通过判断ctx.session.user是否为null判断是否登陆
        // todo 记得不要不密码返回，应该过滤下
        // 登陆成功会返回 set-cookie
        this.success({user})
      }else{
        this.error('用户名或者密码错误')
      }
    } catch (error) {
      this.error(error);
    }  
  }
  // 退出
  async signout() {
    let { ctx } = this;
    ctx.session.user = null;
    this.success('退出成功');
  }
}

module.exports = UsersController;
 