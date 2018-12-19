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
  router.resources('categories', '/api/categories',controller.categories); // egg 定义的refulltApi
  // router.get('/api/categories',controller.categories.index);
  // router.post('/api/categories',controller.categories.create);
  // router.put('/api/categories/:id',controller.categories.update);
  // router.delete('/api/categories/:id',controller.categories.destroy);
  // 文章的
  router.resources('articles','/api/articles',controller.articles);
};
