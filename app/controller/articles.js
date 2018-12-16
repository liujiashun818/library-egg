const BaseController = require('./base');
module.exports = class ArticlesController extends BaseController {
    async index() {
     
        let { pageNum, pageSize, query } = this.getPager(['title','content']);
        try {
           let items = this.getPager('Article', ['title','content']);
           this.success({items});
        } catch (error) {
            this.error(error);
        }
    }
    async create() {
        const { ctx } = this;
        let article = ctx.request.body;
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
}