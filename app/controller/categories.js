let BaseController = require('./base');
module.exports = class CategoriesController extends BaseController {
    async index() {
        let { ctx } = this;
        // 参数
        let { pageNum = 1, pageSize = 5, keyword } = ctx.query;
        pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
        pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
        let query = {};
        // 关键字
        if(keyword) {
            query.name = new RegExp(keyword);
        }
        try {
            // 分页查询
            let items = await ctx.model.Category.find(query)
                .skip((pageNum - 1)*pageSize)
                .limit(pageSize);
            this.success({items});
        } catch (error) {
            this.error(error);
        }
    }
    // 增加文章分类
    async create() {
        let {ctx} = this;
        let category = ctx.request.body;
        try {
            doc = await ctx.model.Category.findOne(category);
            if(doc) {
                this.error('此分类已经存在了');
            } else {
                doc = await ctx.model.Category.create(category);
                this.success('保存分类成功');
            }
            ctx.model.Category.create();

        } catch (error) {
            this.error(error);
        }
    }
    async update() {
        let  { ctx } = this;
        let category = ctx.request.body;
        let id = ctx.params.id;
        try {
            let result = await ctx.model.Category.findByIdAndUpdate(id, category);
            this.success('更新成功');
        } catch (error) {
            this.error(error)
        }
    }
    async destroy() {
        let { ctx } = this;
        let id = ctx.params.id;
        try {
            let result = await ctx.model.Category.findByIdAndRemove(id);
            this.success('删除成功');
        } catch (error) {
            this.error(error);
        }
    }
}