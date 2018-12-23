const BaseController = require('./base');
module.exports = class ArticlesController extends BaseController {
    async index() {
        try {
           let items = this.getPager('Article', ['title','content']);
       
        } catch (error) {
            this.error(error);
        }
    }
    async create() {
        const { ctx } = this;
        let article = ctx.request.body;
        article.user = this.user;
        try {
            article = await ctx.model.Article.create(article);
            this.success('文章发表成功');
        } catch (error) {
            this.error(error);
        }
    }
    async update() {
        const { ctx } = this;
        let id   = ctx.params.id;
        let article = cxt.request.body;
        try {
            ctx.model.Article.findByIdAndUpdate(id, article);
            this.success('更新文章成功');
        } catch (error) {
            this.error(error)
        }
    }
    async delete() {
        const { ctx } = this;
        let id = ctx.params.id;
        try {
            await ctx.model.Article.findByIdAndRemove(id);
            this.success('删除文章成功');
        } catch (error) {
            this.error(error);
        }
    }
    async addPv() {
        const {ctx} = this;
        let id = ctx.params.id;
        try {
            await ctx.model.Article.findByIdAndUpdate(id, { $inc: {pv: 1}});
            this.success('修改pv成功');
        } catch (error) {
            this.error(error);
        }
    }
    async addComment(){
        const { ctx } = this;
        let id = ctx.params.id;
        let comment = ctx.request.body;
        comment.user = this.user;
        // comment.user = this.user.id;
        try {
            await ctx.model.Article.findByIdAndUpdate(id, {$push: { comments: comment}})
            this.success('评论成功');
        } catch (error) {
            this.error(error);
        }
    }
}