'use strict';

// had enabled by egg
// exports.static = true;
// 用到数据库的时候打开
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose'
}
exports.cors = {
    enabled: true,
    package: 'egg-cors',
    // 跨域用的
}
