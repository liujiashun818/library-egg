'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_3';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    // 配置mongoose ,node里边操作数据库的模块 ，
    // 以对象的形式操作数据库
    // 1,启动mongdb 数据库/随便找个目录新建个文件夹/data，命令行进入此路径，执行‘mongod --dbpath=./data’回车
    // 2,连接数据, node 中连接数据库用 ‘egg-mongoose’ ; 按装-配置-启用
    // 客户端的连接地址
    url: 'mongodb://127.0.0.1/local' 
  }
  // 暂时先关闭，安全，上线需要解决
  config.security = {
    csrf: false // 记得打开时 带上cookie？csfToken
  }
  return config;
};
