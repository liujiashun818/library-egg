'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.post('/api/users/singup', controller.users.signup);
  router.post('/api/users/signin', controller.users.signin);
  router.get('/api/users/signout', controller.users.signout);
 // 增删改查
 router.resources('categories', '/api/categories', controller.categories);

  // router.get('/api/categories',controller.categories.index);
  // router.post('/api/categories',controller.categories.create);
  // router.put('/api/categories/:id',controller.categories.update);
  // router.delete('/api/categories/:id',controller.categories.destroy);
  // 文章的
  router.resources('articles', '/api/articles', controller.articles);
  router.get('api/articles/pv/:id', controller.articles.addPv);
  router.post('api/articles/comment/:id', controller.articles.addComment);

};
