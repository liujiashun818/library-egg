'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.post('/api/users/signup', controller.users.signup); //注册
  router.post('/api/users/signin', controller.users.signin); // 登陆
  router.get('/api/users/signout', controller.users.signout);
 // 分类增删改查
 router.resources('categories', '/api/categories', controller.categories);

  // router.get('/api/categories',controller.categories.index);
  // router.post('/api/categories',controller.categories.create);
  // router.put('/api/categories/:id',controller.categories.update);
  // router.delete('/api/categories/:id',controller.categories.destroy);
  // 文章的
  router.resources('articles', '/api/articles', controller.articles);
  router.get('/api/articles/pv/:id', controller.articles.addPv);
  router.get('/api/articles/detail/:id', controller.articles.detail); // 获取详情
  // router.post('/api/articles/comment/:id', controller.articles.addComment);
  router.delete('/api/articles/:article_id/comment/:comment_id', controller.articles.removeComment);

};
