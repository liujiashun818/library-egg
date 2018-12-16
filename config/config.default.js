'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_3';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    client: {
      url: 'mongodb:127.0.0.1/201812blog'
    }
  }
  // 暂时先关闭，安全，上线需要解决
  config.security = {
    csrf: false
  }
  return config;
};
