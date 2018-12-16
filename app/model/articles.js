module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
    const ObjectId = Schema.Type.ObjectId;

    let ArticleSchema = new Schema({
        // 标题
        title: {
            type: String,
            required: true
        },
        // 正文
        content: {
            type: String,
            required: true
        },
        // 作者
        user: {
            type: ObjectId,
            ref: 'user'
        },
        // 页面的访问量
        pv: {
            type: Number, 
            default: 0
        },
        // 评论
        comments: [
            {user: {type:ObjectId, ref:'User', content: String}}
        ],
        // 创建时间 默认当前时间
        createAt: {
            type: Date, 
            default: Date.now
        }
    })

    let Article = mongoose.model('Article',ArticleSchema);
    return Article;
}